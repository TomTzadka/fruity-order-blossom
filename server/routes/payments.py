from flask import Blueprint, request, jsonify
from services.payment_service import create_payment_intent

payments_bp = Blueprint('payments', __name__)

# @payments_bp.route('/api/payments/create-intent', methods=['POST'])
# def create_intent():
#     data = request.get_json()
#     amount = data.get('amount')

#     if not amount:
#         return jsonify({'error': 'Amount is required'}), 400

#     try:
#         client_secret = create_payment_intent(amount)
#         return jsonify({'client_secret': client_secret})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

@payments_bp.route('/create-intent', methods=['POST'])
def create_intent():
    data = request.json
    amount = data.get('amount')
    if not amount:
        return jsonify({"error": "Amount is required"}), 400
    return jsonify(create_payment_intent(amount))