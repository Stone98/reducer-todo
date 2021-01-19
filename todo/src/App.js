import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const todos = [
    {
      title: 'todo 1',
      id: 0,
      completed: false
    },
    {
      title: 'todo 2',
      id: 1,
      completed: false
    },
    {
      title: 'todo 3',
      id: 2,
      completed: false
    },
  ]

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

export default App;
