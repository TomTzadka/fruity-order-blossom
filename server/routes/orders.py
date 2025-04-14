from flask import Blueprint, request, jsonify
from services.orders_service import create_new_order, get_all_orders, get_order_by_id

orders_bp = Blueprint('orders', __name__, url_prefix='/api/orders')


@orders_bp.route('', methods=['POST'])
def create_order():
    order_data = request.json
    new_order = create_new_order(order_data)
    return jsonify(new_order)


@orders_bp.route('', methods=['GET'])
def get_orders():
    orders = get_all_orders()
    return jsonify(orders)


@orders_bp.route('/<order_id>', methods=['GET'])
def get_order(order_id):
    order = get_order_by_id(order_id)
    if order:
        return jsonify(order)
    return jsonify({"error": "Order not found"}), 404