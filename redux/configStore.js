// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(Saga);
  return store;
};

export default configureStore;
