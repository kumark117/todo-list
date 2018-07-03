const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoModel = new Schema({
    id: {
        type: Number
    },
    name: {
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