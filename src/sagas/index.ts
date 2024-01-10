// sagas.ts

// Import necessary functions and types from redux-saga/effects
import { call, put, takeEvery, all, CallEffect, PutEffect } from 'redux-saga/effects';

// Import action types and action creators from the actions module
import { FETCH_TODOS_REQUEST, fetchTodosSuccess, fetchTodosFailure, TodoActionTypes } from '../actions';

// Import the API function to fetch todos and the ITodo interface
import { fetchTodos } from '../services/api';
import { ITodo } from '../interfaces';

// Define the saga function responsible for fetching todos
// sagas.ts
function* fetchTodosSaga(): Generator<CallEffect | PutEffect<TodoActionTypes>, void, unknown> {
    try {
        const todos = (yield call(fetchTodos)) as ITodo[];
        yield put(fetchTodosSuccess(todos));
    } catch (e) {
        const error = e as Error;
        yield put(fetchTodosFailure(error.message));
    }
}

function* fetchTodoSagaWatcher(): Generator {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosSaga);
}

// Define the root saga function that watches for FETCH_TODOS_REQUEST actions
function* rootSaga(): Generator {
    yield all([
        call(fetchTodoSagaWatcher)
    ]);
}

// Export the root saga as the default export
export default rootSaga;
