// actions.ts
import {ITodo} from "../interfaces";

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

interface FetchTodosRequest {
    type: typeof FETCH_TODOS_REQUEST;
}

interface FetchTodosSuccess {
    type: typeof FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodosFailure {
    type: typeof FETCH_TODOS_FAILURE;
    payload: string;
}

export type TodoActionTypes = FetchTodosRequest | FetchTodosSuccess | FetchTodosFailure;

export const fetchTodosRequest = (): FetchTodosRequest => ({
    type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos: any[]): TodoActionTypes => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos
});

export const fetchTodosFailure = (error: string): TodoActionTypes => ({
    type: FETCH_TODOS_FAILURE,
    payload: error
});