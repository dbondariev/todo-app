import axios, { AxiosResponse } from 'axios';
import { ITodo } from '../interfaces';

const baseURL = 'https://dummyjson.com';

interface TodoApiResponse {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchTodos = async (): Promise<ITodo[]> => {
  try {
    const response: AxiosResponse<TodoApiResponse> = await axios.get(`${baseURL}/todos`);

    // Extract the 'todos' array from the response
    return response.data.todos;
  } catch (error) {
    console.error('Error while fetching todos:', error);
    throw error;
  }
};
