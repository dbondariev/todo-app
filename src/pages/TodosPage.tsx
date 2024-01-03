import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';
import { fetchTodos } from '../services/api';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodosFromAPI = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
        console.log(todosData)
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodosFromAPI();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
      todo: ''
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to delete?');
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
      <React.Fragment>
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
      </React.Fragment>
  );
};
