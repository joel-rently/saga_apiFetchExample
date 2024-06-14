import {SET_DATA, FETCH_DATA} from './actionTypes';

export const setData = data => ({
  type: SET_DATA,
  data,
});

export const fetchData = () => ({
  type: FETCH_DATA,
});
