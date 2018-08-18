/* eslint-disable */
const express = require('express');
const app = express();
const controller = require('../controllers/todoController');
const router = express.Router();

app.use('/api', router);

router.route('/todos')
    .get(controller.getTodos)
    .post(controller.addTodo);

router.route('/todos/:_id')
    .get(controller.getTodoById)
    .delete(controller.deleteTodoById);

router.route('/todos/:_id/complete')
    .put(controller.completeTodo);

router.route('/todos/:_id/recover')
    .put(controller.recoverTodo);

router.route('/tags')
    .get(controller.getTags);

module.exports = router;