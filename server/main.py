from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app)

cluster = MongoClient('mongodb+srv://MariaLeo:provcolk13@cluster0-vfkmt.mongodb.net/test?retryWrites=true&w=majority')
db = cluster['love_lock']
values_collection = db['authorisation']
lock_collection = db['lock']


def get_data_as_response_object(username):
    response_object = {}
    results = values_collection.find({'username': username})
    arr = []
    for el in results:
        arr.append({'username': str(el['username'])})
    response_object['data'] = arr
    return response_object

@app.route('/api/is_registered', methods=['GET'])
def is_registered():
    if request.method == 'GET':
        username = request.args.get('username')
        response_object = get_data_as_response_object(username)
        return jsonify(response_object)

@app.route('/api/get_user_data', methods=['GET'])
def get_user_data():
    if request.method == 'GET':
        username = request.args.get('username')
        response_object = get_data_as_response_object(username)
        return jsonify(response_object)

@app.route('/api/send_lock_data', methods=['POST'])
def add_input_value_into_db():
    if request.method == 'POST':
        request_data = request.get_json()
        username = request_data.get('username')
        person = request_data.get('person')
        design = request_data.get('design')
        size = request_data.get('size')
        message = request_data.get('message')
        lock_collection.insert_one({"username": username, "person" : person, "design": design, "size": size, "message": message})
        return jsonify({})


@app.route('/api/delete_lock_id', methods=['POST'])
def delete_lock_id():
    if request.method == 'POST':
        lock_collection.delete_one({'person': '34'})
        return jsonify({})


# @app.route('/api/send', methods=['POST'])
# def add_input_value_into_db():
#     if request.method == 'POST':
#         request_data = request.get_json()
#         name = request_data.get('name')
#         surname = request_data.get('surname')
#         username = request_data.get('username')
#         password = request_data.get('password')
#         values_collection.insert_one({"name" : name, "surname": surname, "username": username, "password": password})
#         return jsonify({})

if __name__ == '__main__':
    app.run()
