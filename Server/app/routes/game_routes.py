from flask import Blueprint

game_bp = Blueprint("game", __name__)

@game_bp.route("/test")
def test_game():
    return {"message": "Game route working"}
