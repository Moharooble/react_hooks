import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addnew } from '../futures/todoSlise';
import { logout } from '../futures/auth';

const TodoForm = () => {
  const [todo, setTodo] = useState(''); // Controlled input state
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === '') {
      alert('Please enter a valid todo');
      return;
    }

    dispatch(addnew(todo)); // Dispatch the new todo
    setTodo(''); // Clear the input field
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem('user'); // Clear user from localStorage
  };

  return (
    <div className="todoform">
      <div className="header">
        <h2>Todo Form</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
