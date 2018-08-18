/* eslint-disable */
const Todo = require('../models/todoModel');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/Todos');

const getResponse = (res) => {
    return (err, results) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json(results)
        }
    };   
}

/* const modifyResponse = (res) => {
    return (err, results) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json({ success:  })
        }
    }
} */

exports.getTodos = (req, res) => {
    switch(req.query.query) {
        case 'sorted':
            let mySort = { complete: 1 }
            Todo.find({}, null, {sort: mySort}, getResponse(res))
            break;
        case 'complete':
            let myQuery = { complete: true }
            Todo.find(myQuery, getResponse(res))
            break;
        default:
            Todo.find(getResponse(res));
    }
}

exports.addTodo = (req, res) => {
    let todo = new Todo(req.body);
    Todo.save((err, todo) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.status(201).send(todo);
        }
    });
}

exports.getTodoById = (req, res) => {
    let myQuery = { _id: req.params._id }
    Todo.findOne(myQuery, getResponse(res));
}

exports.deleteTodoById = (req, res) => {
    let myQuery = { _id: req.params._id } 
    Todo.deleteOne(myQuery, (err, response) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json({ success: req.params._id })
        }
    });
}

exports.completeTodo = (req, res) => {
    let query = { _id: req.params._id }
    let values= { $set: {complete: true} }
    Todo.updateOne(query, values, (err, response) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json({ success: req.params._id })
        }
    });
}

exports.recoverTodo = (req, res) => {
    let query = { _id: req.params._id }
    let values = { $set: {complete: false} }
    Todo.updateOne(query, values, (err, response) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json({ success: req.params._id })
        }
    });
}

exports.getTags = (req, res) => {
    let myQuery = "tags";
    Todo.find().distinct(myQuery, (err, docs) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.json(docs)
        }
    });
}