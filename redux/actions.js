import {  CREATE_TODO_SAGA, REMOVE_TODO_SAGA, CHECKED_TODO_SAGA } from './actionTypes';

let count = 0;
export const addTodo = todoText => ({
  type: CREATE_TODO_SAGA,
  todo: todoText,
  id: ++count,
});

export const dltTodo = id => ({
  type: REMOVE_TODO_SAGA,
  id,
});

export const checked = id => ({
  type: CHECKED_TODO_SAGA,
  id,
});
