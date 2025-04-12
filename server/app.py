
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
import datetime

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
    order_data['createdAt'] = datetime.datetime.now().isoformat()
    
    # Remove sensitive card data
    if 'payment' in order_data and 'method' in order_data['payment'] and order_data['payment']['method'] == 'credit_card':
        # Keep only the last 4 digits of the card number for reference
        if 'card' in order_data['payment']:
            order_data['payment']['card'] = {
                'last4': order_data['payment']['card'].get('last4', '')
            }
    
    orders.append(order_data)
    save_orders(orders)
    
    return jsonify({"message": "Order created successfully", "order_id": order_id})

@app.route('/api/orders', methods=['GET'])
def get_orders():
    orders = load_orders()
    
    # For admin use, return simplified order data
    simplified_orders = []
    for order in orders:
        simplified_orders.append({
            'id': order['id'],
            'customer': {
                'name': order['customer']['name'],
                'email': order['customer']['email'],
            },
            'total': order['total'],
            'status': order['status'],
            'createdAt': order['createdAt']
        })
    
    return jsonify(simplified_orders)

@app.route('/api/orders/<order_id>', methods=['GET'])
def get_order(order_id):
    orders = load_orders()
    order = next((o for o in orders if o['id'] == order_id), None)
    
    if order:
        # If payment data exists, ensure we only return the last 4 digits
        if 'payment' in order and 'card' in order['payment']:
            order['payment']['card'] = {
                'last4': order['payment']['card'].get('last4', '')
            }
        return jsonify(order)
    
    return jsonify({"error": "Order not found"}), 404

@app.route('/api/login', methods=['POST'])
def admin_login():
    login_data = request.json
    
    # In a real app, this would check against a database
    # For demo, we use a hard-coded admin credential
    if login_data.get('email') == 'admin@example.com' and login_data.get('password') == 'admin123':
        return jsonify({"token": "demo_admin_token", "success": True})
    
    return jsonify({"error": "Invalid credentials", "success": False}), 401

if __name__ == '__main__':
    # Create data directory if it doesn't exist
    if not os.path.exists('server/data'):
        os.makedirs('server/data')
    
    app.run(debug=True, port=5000)
