import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  TodoActionTypes,
  TOGGLE_TODO
} from '../actions';
import { ITodo } from '../interfaces';

export interface ITodoState {
  loading: boolean;
  data: ITodo[];
  error: string;
}

const initialState: ITodoState = {
  loading: false,
  data: [],
  error: ''
};

const todosReducer = (state = initialState, action: TodoActionTypes): ITodoState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        data: action.payload.todos,
        error: ''
      };
    case FETCH_TODOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      };
    case TOGGLE_TODO: {
      const updatedTodosToggle = state.data.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        data: updatedTodosToggle
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
