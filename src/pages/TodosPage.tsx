import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';
import { addTodo, toggleTodo, removeTodo, fetchTodosRequest } from '../actions';
import {Action} from "redux-saga";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "../store";

declare let confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos.data);
  const dispatch: ThunkDispatch<{}, {}, Action> = useDispatch();

  useEffect(() => {
    // todo get from store and display to page
    const fetchTodosFromAPI = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
        console.log(todosData);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };


  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  useEffect(() => {
  }, [todos]);

  const addHandler = (title: string) => {
    // todo add to store
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
      todo: ''
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    //todo update store with completed status of todo
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
    // todo remove from store

    const shouldRemove = confirm('Are you sure you want to delete?');
    if (shouldRemove) {
      dispatch(removeTodo(id)); // Dispatch an action to remove a todo from the store
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  );
};
