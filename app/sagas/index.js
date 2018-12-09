import getTodosSaga from './getTodos.saga';
import getTagsSaga from './getTags.saga';
import completeTodoSaga from './completeTodo.saga';
import recoverTodoSaga from './recoverTodo.saga';
import postTodoSaga from './postTodo.saga';
import removeTodoSaga from './removeTodo.saga';

export default function* rootSaga() {
  yield [
    getTodosSaga(),
    getTagsSaga(),
    completeTodoSaga(),
    recoverTodoSaga(),
    postTodoSaga(),
    removeTodoSaga(),
  ];
}
