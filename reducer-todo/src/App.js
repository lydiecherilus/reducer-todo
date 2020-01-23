import React, { useReducer } from 'react';
import { initialState, reducerFile } from './reducers/reducerFile';
import './App.css';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';


function App() {
  const [state, dispatch] = useReducer(reducerFile, initialState)

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const addTodo = item => {
    dispatch({ type: 'ADD_TODO', payload: item });
  };

  const completedTodo = () => {
    dispatch({ type: 'COMPLETED_TODO' });
  };

  return (
    <div className="App">
      <h1>Todo App Reducer!</h1>
      <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} completedTodo={completedTodo} />
    </div>
  );
}
export default App;