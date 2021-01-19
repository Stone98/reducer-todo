import './App.css';
import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import reducer, { initialState } from './reducers';
import { addTodo } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      {/* <button onClick={handleClick}>test button</button> */}
      <TodoList todos={state.todos} />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
