from flask import Blueprint, request, jsonify
from app.models import db, User

auth_bp = Blueprint("auth", __name__)

# ✅ SIGNUP Route
@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    username = data.get("username")
    password = data.get("password")

    if not email or not username or not password:
        return jsonify({"message": "Missing fields"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    user = User(email=email, username=username)
    user.set_password(password)  # 🔒 set hashed password properly

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Signup successful"}), 201

# ✅ LOGIN Route
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):  # 🔐 use model's method
        return jsonify({"message": "Login successful"}), 200

    return jsonify({"message": "Invalid credentials"}), 401
