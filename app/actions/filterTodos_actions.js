import { FILTER_TODOS } from './types';

export const filterTodos = filter => ({
  type: FILTER_TODOS,
  payload: filter,
});
