/* eslint-disable */
const Todo = require('../models/todoModel');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/Todos');

var todoController = {};

todoController.getTodos = [
    function(req, res) {
        switch(req.query.query) {
            case 'sorted':
                let mySort = { complete: 1 }
                Todo.find({}, null, {sort: mySort}, (err, todos) => {
                    if (err) { 
                        return next(err) 
                    } else {
                        res.json(todos);
                    }
                })
                break;
            default:
                Todo.find((err, todos) => {
                    if (err) { 
                        return next(err)
                    } else {
                        res.json(todos);
                    }
                });
        }
    }
];

todoController.addTodo = [
    function(req, res) {
        let todo = new Todo(req.body);
        todo.save((err, todo) => {
            if (err) {
                return next(err);
            } else {
                res.status(201).send(todo);
            }
        });
    }
];

todoController.getTodoById = [
    function(req, res) {
        let query = {_id: req.params._id}
        Todo.findOne((err, todo) => {
            if (err) {
                return next(err);
            } else {
                res.json(todo)
            }
        });
    }
];

todoController.deleteTodoById = [
    function(req, res) {
        let query = {_id: req.params._id} 
        Todo.deleteOne(query, (err, response) => {
            if (err) {
                return next(err);
            } else {
                res.json({ success: req.params._id })
            }
        });
    }
];

todoController.completeTodo = [
    function(req, res) {
        let query = {_id: req.params._id}
        let values= {$set: {complete: true}}
        Todo.updateOne(query, values, (err, response) => {
            if (err) {
                return next(err);
            } else {
                res.json({ success: req.params._id })
            }
        });
    }
];

todoController.recoverTodo = [
    function(req, res) {
        let query = {_id: req.params._id}
        let values = {$set: {complete: false}}
        Todo.updateOne(query, values, (err, response) => {
            if (err) {
                return next(err);
            } else {
                res.json({ success: req.params._id })
            }
        });
    }
];

todoController.getTags = [
    function(req, res) {
        let query = "tags";
        Todo.find().distinct(query, (err, docs) => {
            if (err) {
                return next(err);
            } else {
                res.json(docs)
            }
        });
    }
];

module.exports = todoController;