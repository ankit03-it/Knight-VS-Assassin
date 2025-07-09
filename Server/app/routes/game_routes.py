from flask import Blueprint, request, jsonify
from ..models import db, Game, MoveHistory  # ⬅️ Make sure MoveHistory is imported
import chess
from datetime import datetime

game_bp = Blueprint("game", __name__)

@game_bp.route("/test")
def test_game():
    return {"message": "Game route working"}

# ✅ Start Game
@game_bp.route('/start', methods=['POST'])
def start_game():
    data = request.get_json()
    white_email = data.get('white')
    black_email = data.get('black')

    if not white_email or not black_email:
        return jsonify({'error': 'Both white and black player emails are required'}), 400

    start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w"
    game = Game(white=white_email, black=black_email, board_state=start_fen)
    db.session.add(game)
    db.session.commit()

    return jsonify({
        'message': 'Game created',
        'game_id': game.id,
        'board': game.board_state,
        'turn': game.turn
    }), 201

# ✅ Make Move & Save to History
@game_bp.route('/make-move/<int:game_id>', methods=['POST'])
def make_move(game_id):
    data = request.get_json()
    move_uci = data.get('move')
    player = data.get('player')

    game = Game.query.get(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    if not move_uci or not player:
        return jsonify({'error': 'Move and player are required'}), 400

    if game.turn == "white" and player != game.player_white_email:
        return jsonify({'error': "It's white's turn"}), 403
    if game.turn == "black" and player != game.player_black_email:
        return jsonify({'error': "It's black's turn"}), 403

    try:
        board = chess.Board(game.board_state)
    except:
        return jsonify({'error': 'Corrupted board state'}), 500

    try:
        move = chess.Move.from_uci(move_uci)
    except:
        return jsonify({'error': 'Invalid move format (should be like "e2e4")'}), 400

    if move not in board.legal_moves:
        return jsonify({'error': 'Illegal move'}), 400

    board.push(move)
    game.board_state = board.fen()

    # ✅ Save to MoveHistory
    turn_number = MoveHistory.query.filter_by(game_id=game.id).count() + 1
    move_entry = MoveHistory(
        game_id=game.id,
        player_email=player,
        move=move_uci,
        turn_number=turn_number,
        timestamp=datetime.utcnow()
    )
    db.session.add(move_entry)

    if board.is_checkmate():
        game.winner = player
    else:
        game.turn = "black" if game.turn == "white" else "white"

    db.session.commit()

    return jsonify({
        'message': 'Move accepted',
        'board': game.board_state,
        'turn': game.turn,
        'winner': game.winner
    }), 200

# ✅ Get Game State
@game_bp.route('/<int:game_id>', methods=['GET'])
def get_game_state(game_id):
    game = Game.query.get(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    return jsonify({
        'game_id': game.id,
        'white': game.player_white_email,
        'black': game.player_black_email,
        'board': game.board_state,
        'turn': game.turn,
        'winner': game.winner
    }), 200

# ✅ Get Move History
@game_bp.route('/moves/<int:game_id>', methods=['GET'])
def get_move_history(game_id):
    game = Game.query.get(game_id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404

    moves = MoveHistory.query.filter_by(game_id=game_id).order_by(MoveHistory.turn_number).all()

    return jsonify([
        {
            'turn': m.turn_number,
            'player': m.player_email,
            'move': m.move,
            'timestamp': m.timestamp.isoformat()
        }
        for m in moves
    ])
