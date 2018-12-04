from flask import Flask, jsonify, request
import json
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_cors import CORS
import datetime

# Custom JSON Encoder class
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId): # bson.objectid.ObjectId
            return str(o)
        if isinstance(o, datetime.datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)

app = Flask(__name__)
CORS(app)
app.config['MONGO_URI'] = "mongodb://127.0.0.1:27017/Todos"
mongo = PyMongo(app)
app.json_encoder = JSONEncoder

#
# Methods to GET to todos.
# Get all, get all with various parameters e.g. only complete, and get individual todos.
#
@app.route('/api/todos', methods=['GET'])
def get_todos():
    query = request.args.get('query')
    if not query:
        todos = mongo.db.todos.find()
    elif query == 'complete':
        todos = mongo.db.todos.find({ 'complete': True })
    elif query == 'uncomplete':
        todos = mongo.db.todos.find({ 'complete': False })
    elif query == 'sorted':
        todos = mongo.db.todos.find().sort([('complete', 1)])

    data = [todo for todo in todos] # handles pymongo.cursor.Cursor
    return jsonify(data)

@app.route('/api/todos/<id>', methods=['GET'])
def get_todo_by_id(id=None):
    todo = mongo.db.todos.find_one({ '_id': ObjectId(id) })
    return jsonify(todo)

#
# Method to modify todos i.e. complete and recover.
#
@app.route('/api/todos/<id>/complete', methods=['PUT'])
def complete_todo(id):
    mongo.db.todos.update_one({'_id': ObjectId(id)}, {'$set': {'complete': True}})
    return jsonify({'ok': True, 'message': 'Todo completed'}), 201

@app.route('/api/todos/<id>/uncomplete', methods=['PUT'])
def uncomplete_todo(id):
    mongo.db.todos.update_one({'_id': ObjectId(id)}, {'$set': {'complete': False}})
    return jsonify({'ok': True, 'message': 'Todo uncompleted'}), 201

#
# Method to create a new todo.
#
@app.route('/api/todos', methods=['POST'])
def new_todo():
    print('trying to post todo')
    values = request.get_json()
    print(values)

    required = ["todo", "priority"]
    if not all(k in values for k in required):
        return 'Missing mandatory fields', 400

    mongo.db.todos.insert_one(values)

    response = {'message': 'Todo created'}
    return jsonify(response), 201

#
# Method to remove a todo.
#
@app.route('/api/todos/<id>', methods=['DELETE'])
def delete_todo(id):
    mongo.db.todos.delete_one({'_id': ObjectId(id)})
    return jsonify({'ok': True, 'message': 'Todo deleted'}), 201

#
# Method to get all tags.
#
@app.route('/api/tags', methods=['GET'])
def get_tags():
    tags = mongo.db.todos.find().distinct('tags')
    return jsonify(tags), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
