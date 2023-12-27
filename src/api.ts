// api.ts

import axios, { AxiosResponse } from 'axios';
import { ITodo } from './interfaces'; // Import ITodo from the correct file

const baseURL = 'https://dummyjson.com';

interface TodoApiResponse {
    todos: ITodo[];
    total: number;
    skip: number;
    limit: number;
}

export const fetchTodos = async (): Promise<ITodo[]> => {
    try {
        const response: AxiosResponse<TodoApiResponse> = await axios.get(
            `${baseURL}/todos`
        );

        // Extract the 'todos' array from the response
        const todos: ITodo[] = response.data.todos;

        return todos;
    } catch (error) {
        console.error('Error while fetching todos:', error);
        throw error;
    }
};
