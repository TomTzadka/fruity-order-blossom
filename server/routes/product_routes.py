from flask import Blueprint, jsonify
from services.product_service import get_all_products

product_bp = Blueprint('product', __name__, url_prefix='/products')

@product_bp.route('/')
def all_products():
    return jsonify(get_all_products())
