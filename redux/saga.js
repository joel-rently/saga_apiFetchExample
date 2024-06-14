import { put, takeEvery, all } from 'redux-saga/effects';
import { CREATE_TODO, CHECKED_TODO, REMOVE_TODO, CREATE_TODO_SAGA, CHECKED_TODO_SAGA, REMOVE_TODO_SAGA } from './actionTypes';

// Worker Sagas
function* handleAddTodoSaga(action) {
  yield put({ type: CREATE_TODO, todo: action.todo, id: action.id });
}

function* handleRemoveTodoSaga(action) {
  yield put({ type: REMOVE_TODO, id: action.id });
}

function* handleCheckedSaga(action) {
  yield put({ type: CHECKED_TODO, id: action.id });
}

// Watcher Sagas
function* watchAddTodo() {
  yield takeEvery(CREATE_TODO_SAGA, handleAddTodoSaga);
}

function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO_SAGA, handleRemoveTodoSaga);
}

function* watchChecked() {
  yield takeEvery(CHECKED_TODO_SAGA, handleCheckedSaga);
}

// Root Saga
export default function* rootSaga() {
  yield all([watchAddTodo(), watchRemoveTodo(), watchChecked()]);
}
