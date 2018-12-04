const initialState = {
  todos: {
    isLoading: false,
    error: null,
    todos: {},
    filteredTodos: {},
    isFiltered: false,
  },
  tags: {
    isLoading: false,
    error: null,
    tags: ['All'],
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
