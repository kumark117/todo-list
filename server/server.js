const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = mongoose.connect('mongodb://127.0.0.1:27017/Todos');
const Todo = require('./models/todoModel');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        console.log("options")
        return res.send(200);
    } else {
        return next();
    }
 });

const todoRouter = express.Router();
app.use('/api', todoRouter);

todoRouter.route('/todos')
     .post((req, res) => {
        var todo = new Todo(req.body);
        console.log(todo)
        todo.save((err, todo) => {
            if (err) {
                res.send(err);
            } else {
                res.status(201).send(todo);
            }
        });
    })
    .get((req, res) => {
        Todo.find((err, todos) => {
            if (err) { 
                console.log(err) 
            } else {
                res.json(todos);
            }
        });
    });

todoRouter.route('/tags')
    .get((req, res) => {
        let query = "tags";
        Todo.find().distinct(query, (err, docs) => {
            if (err) {
                console.log(err)
            } else {
                res.json(docs)
            }
        });
    });

app.listen(port, () => {
    console.log('Running on port ' + port)
});
