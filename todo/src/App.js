import React from 'react';



function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <div className="todoList">
        <h3>List of Items</h3>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
        </ul>
        <button>Clear Completed</button>
      </div>
      <div className="todoForm">
        <form>
          <label htmlFor="">
            Title:
             <input type="text" />
          </label>
          <button>Submit Todo</button>
        </form>
      </div>
    </div>
  );
}

export default App;
