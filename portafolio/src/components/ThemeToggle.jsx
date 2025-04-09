import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"}>
      <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
