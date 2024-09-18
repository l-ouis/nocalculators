import random

# pts from 1 to 20
# questions:
# - add
# - subtract
# - multiply
# - divide
# - remainder
# - exponent
# - combination + permutation
# - mixup
# - other various probability stuff

class QuestionAdd():
    def __init__(self):
        self.answer = None
        self.message = None
        self.points = 1
    def make(self):
        a = random.randint(0, 1000)
        b = random.randint(0, 1000)
        self.answer = a + b
        self.message = f"{a} + {b}"
        if self.answer % 10 != 0:
            self.points += 1
        if self.answer % 100 > 10:
            self.points += 1
        if a > 100 and b > 100:
            self.points += 1
    def get_message(self):
        return self.message
    def get_json(self):
        return {
            "question": self.message,
            "answer": self.answer,
        }
    def check(self, ans):
        return self.points if ans == self.answer else -self.points // 2

class QuestionSubtract():
    def __init__(self):
        self.answer = None
        self.message = None
        self.points = 1
    def make(self):
        a = random.randint(0, 1000)
        b = random.randint(0, 1000)
        self.answer = a - b
        self.message = f"{a} - {b}"
        if self.answer % 10 != 0:
            self.points += 1
        if self.answer % 100 > 10:
            self.points += 1
        if a > 100 and b > 100:
            self.points += 1
    def message(self):
        return self.message
    def check(self, ans):
        return self.points if ans == self.answer else -self.points // 2