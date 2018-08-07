/* eslint-disable */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const todo = require('./controllers/todo');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
 });

const todoRouter = express.Router();
app.use('/api', todoRouter);

todoRouter.route('/todos')
    .get(todo.getTodos)
    .post(todo.addTodo);

todoRouter.route('/todos/:_id/')
    .get(todo.getTodoById)
    .delete(todo.deleteTodoById);

todoRouter.route('/todos/complete/:_id')    // put id before complete
    .put(todo.completeTodo);

todoRouter.route('/todos/recover/:_id')     // put id before recover
    .put(todo.recoverTodo);

todoRouter.route('/tags')
    .get(todo.getTags);

app.listen(port, () => {
    console.log('Running on port ' + port)
});
