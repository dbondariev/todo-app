import { call, put, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects';
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
  TodoActionTypes
} from '../actions';
import { fetchTodos } from '../services/api';
import { ITodo } from '../interfaces';

function* fetchTodosSaga(): Generator<CallEffect | PutEffect<TodoActionTypes>, void, unknown> {
  try {
    const todos = (yield call(fetchTodos)) as ITodo[];
    yield put(fetchTodosSuccess(todos));
  } catch (e) {
    const error = e as Error;
    yield put(fetchTodosFailure(error.message));
  }
}

function* rootSaga(): Generator {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosSaga);
}

export default rootSaga;
