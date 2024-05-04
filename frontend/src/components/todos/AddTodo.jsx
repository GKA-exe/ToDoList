import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./AddTodo.css";
import { useParams } from "react-router-dom";

function AddTodo() {
  const { id } = useParams(); 
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
    author: "",
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/todos", {
        ...todo,
        author: id, 
      });
      console.log(res.data);
      setTodo({
        name: "",
        isComplete: false,
        author: id, 
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <form className="form-style" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="enter-todo"
          name="name"
          variant="outlined"
          label="Enter Todo"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={handleChange}
        />
        <Button
          className="submit-button"
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
        >
          Add
        </Button>
      </form>
    </>
  );
}

export default AddTodo;
