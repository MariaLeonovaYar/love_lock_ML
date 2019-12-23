from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app)

cluster = MongoClient('mongodb+srv://atakhanova:Kate1245@cluster0-f05bv.mongodb.net/test?retryWrites=true&w=majority')
db = cluster['love_lock']
values_collection = db['authorisation']

@app.route('/api/send', methods=['POST'])
def add_input_value_into_db():
    if request.method == 'POST':
        request_data = request.get_json()
        name = request_data.get('name')
        surname = request_data.get('surname')
        email= request_data.get('email')
        password = request_data.get('password')
        values_collection.insert_one({"name" : name, "surname": surname, "email": email, "password": password})
        return jsonify({})

if __name__ == '__main__':
    app.run()
