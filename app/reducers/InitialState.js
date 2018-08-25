const initialState = {
  todos: {
    isLoading: false,
    error: null,
    todos: {},
    filteredTodos: {},
  },
  tags: {
    isLoading: false,
    error: null,
    tags: [],
  },
  postTodo: {
    isLoading: false,
    error: null,
  },
  modifyTodo: {
    isLoading: false,
    error: null,
  },
};

export default initialState;
