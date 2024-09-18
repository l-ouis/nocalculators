from flask import Flask, jsonify
import random
from questions import QuestionAdd
from flask_cors import CORS



def random_question():
    q = QuestionAdd()
    q.make()
    return q.get_json()



class BasicGame():
    def __init__(self):
        self.team1 = []
        self.team2 = []
        self.questions = []

    def add_player(self, player, team):
        pass

    def end_game(self):
        pass

    def generate_questions(self):
        for i in range(120):
            self.questions.append(QuestionAdd())

app = Flask(__name__)
CORS(app)

@app.route('/api/question', methods=['GET'])
def hello():
    return jsonify(random_question())

if __name__ == '__main__':
    app.run(debug=True)