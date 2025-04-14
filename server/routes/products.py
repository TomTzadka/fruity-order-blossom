from flask import Blueprint, request, jsonify
from services.products_service import get_all_products, get_product_by_id

products_bp = Blueprint('products', __name__, url_prefix='/api/products')


@products_bp.route('', methods=['GET'])
def get_products():
    category = request.args.get('category')
    featured = request.args.get('featured')
    products = get_all_products(category, featured)
    return jsonify(products)


@products_bp.route('/<product_id>', methods=['GET'])
def get_product(product_id):
    product = get_product_by_id(product_id)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404