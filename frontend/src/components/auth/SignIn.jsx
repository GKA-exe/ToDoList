import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signIn', formData);
      const id = formData.email;
      navigate(`/todos/${id}`);
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error(error.response.data);
    }
  };

  return (
    <Container maxWidth="sm" className="signin-container">
      <div className="signin-form">
        <Typography variant="h5" align="center" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="enter-email"
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            id="enter-password"
            label="Password"
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="submit-button"
          >
            Sign In
          </Button>
          {error && <Alert severity="error" className="mt-3">{error}</Alert>}
          <Typography variant="body2" align="center" className="mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;
