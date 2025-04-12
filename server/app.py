
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Load product data from JSON file
def load_products():
    with open('server/data/products.json') as f:
        return json.load(f)

# Load orders data from JSON file, create if doesn't exist
def load_orders():
    if not os.path.exists('server/data/orders.json'):
        with open('server/data/orders.json', 'w') as f:
            json.dump([], f)
    
    with open('server/data/orders.json') as f:
        return json.load(f)

# Save orders data to JSON file
def save_orders(orders):
    with open('server/data/orders.json', 'w') as f:
        json.dump(orders, f, indent=2)

# API Routes
@app.route('/api/products', methods=['GET'])
def get_products():
    category = request.args.get('category')
    products = load_products()
    
    if category and category != 'all':
        products = [p for p in products if p['category'] == category]
    
    return jsonify(products)

@app.route('/api/products/<product_id>', methods=['GET'])
def get_product(product_id):
    products = load_products()
    product = next((p for p in products if p['id'] == product_id), None)
    
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route('/api/orders', methods=['POST'])
def create_order():
    order_data = request.json
    orders = load_orders()
    
    # Generate a simple order ID
    order_id = f"ORD{len(orders) + 1:04d}"
    order_data['id'] = order_id
    order_data['status'] = 'pending'
    
    orders.append(order_data)
    save_orders(orders)
    
    return jsonify({"message": "Order created successfully", "order_id": order_id})

if __name__ == '__main__':
    # Create data directory if it doesn't exist
    if not os.path.exists('server/data'):
        os.makedirs('server/data')
    
    app.run(debug=True, port=5000)
