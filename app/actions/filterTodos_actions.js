/* eslint-disable */
import { FILTER_TODOS } from './types';

export const filterTodos = (filterField, filter) => ({
  type: FILTER_TODOS,
  payload: {
    filterField,
    filter,
  },
});
