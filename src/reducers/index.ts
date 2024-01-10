// reducers/index.ts
import { TodoActionTypes, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions';
import { ITodo } from "../interfaces";

export interface ITodoState {
    loading: boolean;
    data: ITodo[];
    error: string;
}

const initialState: ITodoState = {
    loading: false,
    data: [],
    error: '',
};

const reducer = (state = initialState, action: TodoActionTypes): ITodoState => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            return {
                loading: false,
                data: action.payload.todos,
                error: '',
            };
        case FETCH_TODOS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
