import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todos from './components/todos/Todos';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import { Container } from '@mui/material';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <NavBar />
        <Container className="content-style">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todos/:id" element={<Todos />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
