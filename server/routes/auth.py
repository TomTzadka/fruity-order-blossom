from flask import Blueprint, request, jsonify
from services.auth_service import verify_admin_credentials

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def admin_login():
    login_data = request.json

    if verify_admin_credentials(login_data.get('email'), login_data.get('password')):
        return jsonify({"token": "demo_admin_token", "success": True})

    return jsonify({"error": "Invalid credentials", "success": False}), 401
