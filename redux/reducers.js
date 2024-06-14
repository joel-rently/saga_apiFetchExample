import {SET_DATA} from './actionTypes';

const initialState = {todos: []};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, todos: action.data};

    default:
      return state;
  }
};
export default reducer;
