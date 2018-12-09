/**
 * Throwback to thunks - now replace by sagas
 */

// export default function completeTodo(id) {
//   return (dispatch) => {
//     dispatch(completeTodoBegin());
//     return axios.put(urlBuilder(`todos/${id}/complete`))
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(completeTodoSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(completeTodoError(error));
//       });
//   };
// }

// export default function getTags() {
//   return (dispatch) => {
//     dispatch(getTagsBegin());
//     return axios.get(urlBuilder('tags'))
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(getTagsSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(getTagsError(error));
//       });
//   };
// }

// export default function getTodos() {
//   return (dispatch) => {
//     dispatch(getTodosBegin());
//     return axios.get(urlBuilder('todos?query=sorted'))
//       .then((response) => {
//         if (response.status === 200) dispatch(getTodosSuccess(response));
//       })
//       .catch((error) => {
//         dispatch(getTodosError(error));
//       });
//   };
// }

// export default function getTodoById(id) {
//   return (dispatch) => {
//     dispatch(getTodoByIdBegin());
//     return axios.get(urlBuilder(`todos/${id}`))
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(getTodoByIdSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(getTodoByIdError(error));
//       });
//   };
// }

// export default function postTodo(values) {
//   return (dispatch) => {
//     dispatch(postTodoBegin());
//     return axios.post('http://localhost:8000/api/todos', values)
//       .then((response) => {
//         if (response.status === 201) {
//           dispatch(postTodoSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(postTodoError(error));
//       });
//   };
// }

// export default function recoverTodo(id) {
//   return (dispatch) => {
//     dispatch(recoverTodoBegin());
//     return axios.put(urlBuilder(`todos/${id}/uncomplete`))
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(recoverTodoSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(recoverTodoError(error));
//       });
//   };
// }

// export default function removeTodo(values) {
//   return (dispatch) => {
//     dispatch(removeTodoBegin());
//     return axios.delete(urlBuilder(`todos/${values}`))
//       .then((response) => {
//         if (response.status === 200) {
//           dispatch(removeTodoSuccess(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(removeTodoError(error));
//       });
//   };
// }
