import './App.css';
import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import reducer, { initialState } from './reducers';
import { addTodo, toggleCompleted } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  }
  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <button onClick={handleToggleCompleted}>test button</button>
      <TodoList todos={state.todos} handleToggleCompleted={handleToggleCompleted} />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
