import React from "react";
import { Typography, ButtonGroup, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";

import "./Todo.css";

function Todo({ todo, fetchTodos }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos(); 
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`);
      fetchTodos(); 
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <div className={`todo-style ${todo.isComplete ? 'completed' : ''}`}>
        <div>
          <Typography variant="subtitle1">{todo.name}</Typography>
          <Typography className="gray-style" variant="body2">
            Author: {todo.author}
          </Typography>
          <Typography className="gray-style" variant="body2">
            Added: {new Date(todo.date).toDateString()}
          </Typography>
        </div>

        <div>
          <ButtonGroup>
            <IconButton color="success" onClick={() => handleComplete(todo._id)}>
              <CheckCircleOutlineIcon />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(todo._id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export default Todo;
