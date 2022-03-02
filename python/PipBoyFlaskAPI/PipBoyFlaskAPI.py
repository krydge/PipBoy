from flask import Flask
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
port = 5001

@app.route("/")
def index():
    print('route /')
    return "Pip-Boy API"
@app.route("/hello")
def hello():
    return "Hello World!"
@app.route("/user")
def user():
    return "user"

@app.route("/user/<string:name>/")
def userInfo(name):
    print("user/{name}")
    user= {'PlayerName': name, 'LVL': 10, 'HPCUR': 350, 'HPMAX': 400, 'APAVAILABLE': 300, 'APMAX': 300, 'XPERNED': 147, 'XPNEEDED': 1100 }
    return json.dumps(user)

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=port)