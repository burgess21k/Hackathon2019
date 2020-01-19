# views.py

from flask import render_template, request

from app import app

@app.route('/')
def index():
    return render_template("game.html")

@app.route('/submit', methods =['POST'])
def submit():
    content = request.json
    print(content['value'])
    return content
