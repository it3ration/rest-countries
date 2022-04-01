import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const spanRef = useRef();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <strong>Where in the world?</strong>
          </Typography>
          <Button color="inherit">
            <span className="dark-mode-text">
              <FontAwesomeIcon icon={faMoon} />
            </span>
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
