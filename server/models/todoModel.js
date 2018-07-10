const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoModel = new Schema({
    id: {
        type: Number
    },
    todo: {
        type: String
    },
    priority: {
        type: String
    },
    tags: {
        type: [String]
    },
    complete: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoModel);
module.exports = Todo;