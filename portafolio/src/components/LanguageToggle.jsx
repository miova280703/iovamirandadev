import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageToggle = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <Tooltip title={language === "es" ? "Change to English" : "Cambiar a Español"}>
      <IconButton onClick={toggleLanguage} color="inherit">
        <TranslateIcon />
      </IconButton>
    </Tooltip>
  );
};

export default LanguageToggle;
