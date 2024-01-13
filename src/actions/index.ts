import { ITodo } from '../interfaces';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

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

interface AddTodo {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface ToggleTodo {
  type: typeof TOGGLE_TODO;
  payload: number; // Assuming payload is the id of the todo to be toggled
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: number; // Assuming payload is the id of the todo to be removed
}

export type TodoActionTypes =
  | FetchTodosRequest
  | FetchTodosSuccess
  | FetchTodosFailure
  | AddTodo
  | ToggleTodo
  | RemoveTodo;

export const fetchTodosRequest = (): FetchTodosRequest => ({
  type: FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess = (todos: any[]): TodoActionTypes => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

export const fetchTodosFailure = (error: string): TodoActionTypes => ({
  type: FETCH_TODOS_FAILURE,
  payload: error
});

export const addTodo = (todo: ITodo): AddTodo => ({
  type: ADD_TODO,
  payload: todo
});

export const toggleTodo = (id: number): ToggleTodo => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number): RemoveTodo => ({
  type: REMOVE_TODO,
  payload: id
});
