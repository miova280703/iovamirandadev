import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Stack
} from "@mui/material";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("es"); // "es" o "en"

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#fff",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Stack>

        <Header language={language} />
        <ProjectsSection language={language} />
        <SkillsSection language={language} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
