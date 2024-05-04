// ListTodos.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Todo from './Todo';
import "./ListTodos.css";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todos");
      setTodos(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchTodos();
    const interval = setInterval(fetchTodos, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="todos-style">
        <Typography variant="h5">The Todos:</Typography>
        {todos.map(todo => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default ListTodos;
