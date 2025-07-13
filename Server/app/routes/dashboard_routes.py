from flask import Blueprint, jsonify
from app.utils.token_required import token_required

dashboard_bp = Blueprint("dashboard", __name__)
# ✅ Protected route for dashboard access
@dashboard_bp.route('/dashboard', methods=['GET'])
@token_required
def dashboard(current_user_email):
    return jsonify({
        'message': f'Welcome to your dashboard, {current_user_email}!'
    }), 200