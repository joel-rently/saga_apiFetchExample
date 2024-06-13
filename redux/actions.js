import {CREATE_TODO, REMOVE_TODO, CHECKED_TODO} from './actionTypes';

let count = 0;
export const addTodo = todoText => {
  return {
    type: CREATE_TODO,
    todo: todoText,
    id: ++count,
  };
};

export const dltTodo = id => {
  return {
    type: REMOVE_TODO,
    id: id,
  };
};

export const checked = id => {
  return {
    type: CHECKED_TODO,
    id: id,
  };
};
