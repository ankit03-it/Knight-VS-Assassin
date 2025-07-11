from . import db

from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    wins = db.Column(db.Integer, default=0)
    losses = db.Column(db.Integer, default=0)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

from app import db

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    player_white_email = db.Column(db.String(120), nullable=False)
    player_black_email = db.Column(db.String(120), nullable=False)
    board_state = db.Column(db.Text, nullable=False)
    turn = db.Column(db.String(10), default="white")
    winner = db.Column(db.String(20), nullable=True)

    def __init__(self, white, black, board_state):
        self.player_white_email = white
        self.player_black_email = black
        self.board_state = board_state
        self.turn = "white"


from datetime import datetime

class MoveHistory(db.Model):
    __tablename__ = 'move_history'
    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=False)
    player_email = db.Column(db.String(120), nullable=False)
    move = db.Column(db.String(10), nullable=False)
    turn_number = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    game = db.relationship('Game', backref=db.backref('moves', lazy=True))
