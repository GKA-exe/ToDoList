import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-background">
        <Container maxWidth="md">
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="home-paper">
                <div className="home-text">
                  <Typography variant="h3" gutterBottom>
                    Welcome to the Todo App
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Start managing your tasks with our simple and intuitive todo list.
                  </Typography>
                  <div className="home-buttons">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      component={Link}
                      to="/signin"
                      className="home-button"
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      component={Link}
                      to="/signup"
                      className="home-button"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="/todo-icon.svg" alt="Todo Icon" className="home-image" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
