import { combineReducers } from 'redux';
import todosReducer, { ITodoState } from './todosReducer';

export interface RootState {
  todos: ITodoState;
}

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
