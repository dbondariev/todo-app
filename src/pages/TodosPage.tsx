import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { toggleTodo, removeTodo, fetchTodosRequest } from '../actions';
import { Action } from 'redux-saga';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const TodosPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos.data);
  const dispatch: ThunkDispatch<RootState, undefined, Action> = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const addHandler = (title: string) => {
    // const newTodo: ITodo = {
    //   title: title,
    //   id: Date.now(),
    //   completed: false,
    //   todo: ''
    // };
    // dispatch(addTodo(newTodo)); // Dispatch an action to add a new todo to the store
  };

  const toggleHandler = (id: number) => {
    dispatch(toggleTodo(id)); // Dispatch an action to update the completed status of a todo in the store
  };

  const removeHandler = (id: number) => {
    const confirmDelete = (question: string) => window.confirm(question); // declare confirm locally

    const shouldRemove = confirmDelete('Are you sure you want to delete?');
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
