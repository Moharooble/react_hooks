import React, { useState } from 'react';
import { UseContext } from '../context/TodoContext';
import { UseAuthContext } from '../context/AuthContext';

const TodoForm = () => {
  const [todo, setTodo] = useState(''); // Initialize as an empty string
  const { dispatch: todoDispatch } = UseContext();
  const {dispatch: authDispatch} = UseAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo

    if (todo.trim() === '') {
      alert('Please enter a valid todo'); // Simple validation
      return;
    }

    todoDispatch({ type: 'NEW_TODO', payload: todo });
    setTodo('')
  };
  const handleLogout = () => {
    authDispatch({type: "LOGOUT"})
    localStorage.removeItem('user')
  }

  return (
    <div>
      <h2>Todo Form </h2>
      <button onClick={handleLogout}>Logout</button>
      <h1> </h1>
      <form onSubmit={handleSubmit}> {/* Use onSubmit for the form */}
        <input
          type="text"
          value={todo} // Controlled input
          onChange={(e) => setTodo(e.target.value)} // Correct event handler
        />
        <button type="submit">Add</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default TodoForm;
