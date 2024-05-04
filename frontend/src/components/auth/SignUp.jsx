import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Container, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
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
      const res = await axios.post('http://localhost:5000/api/signUp', formData);
      console.log(res.data);
      navigate('/signin');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error.response.data);
    }
  };

  return (
    <Container maxWidth="sm" className="signup-container">
      <div className="signup-form">
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="enter-name"
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
            Sign Up
          </Button>
          {error && <Alert severity="error" className="mt-3">{error}</Alert>}
          <Typography variant="body2" align="center" className="mt-2">
            Already have an account? <Link to="/signin">Sign in</Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
