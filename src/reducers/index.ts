import {
  TodoActionTypes,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../actions';

interface TodoState {
  loading: boolean;
  todos: any[];
  error: string;
}

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: ''
};

const reducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: ''
      };
    case FETCH_TODOS_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

