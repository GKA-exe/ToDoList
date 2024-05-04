import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChecklistIcon from "@mui/icons-material/Checklist";

function NavBar() {
  const navigate = useNavigate();

  const handleSignout = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <ChecklistIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            COLLABORATIVE TODO LIST
          </Typography>

          <Box sx={{ justifyContent: "flex-end" }}>
            <Button color="secondary" onClick={handleSignout}>
              SIGN OUT
            </Button>
            <Button color="secondary">
              <Link to="/signin">SIGN IN</Link>
            </Button>
            <Button color="secondary">
              <Link to="/signup">SIGN UP</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
