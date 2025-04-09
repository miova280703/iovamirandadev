import React from "react";
import { Typography, Box, Chip, Stack } from "@mui/material";

const content = {
    es: {
        title: "Habilidades",
        skills: {
            "Lenguajes de Programación": ["Golang", "JavaScript", "TypeScript", "Python", "C#", "C/C++", "Java", "SQL"],
            "Frameworks / Librerías": ["React", "Node.js", "Express", "MUI"],
            "Testing / QA": ["Postman", "Swagger", "Jest", "Cypress", "Selenium", "SuperTest"],
            "Herramientas": ["Git", "GitHub", "Docker", "VS Code", "Jenkis"],
            "Bases de Datos": ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
            "Otros": ["Firebase", "REST", "Agile", "Scrum", "Kanban"],
        }
    },
    en: {
        title: "Skills",
        skills: {
            "Lenguajes de Programación": ["Golang", "JavaScript", "TypeScript", "Python", "C#", "C/C++", "Java", "SQL"],
            "Frameworks / Librerías": ["React", "Node.js", "Express", "MUI"],
            "Testing / QA": ["Postman", "Swagger", "Jest", "Cypress", "Selenium", "SuperTest"],
            "Herramientas": ["Git", "GitHub", "Docker", "VS Code", "Jenkis"],
            "Bases de Datos": ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
            "Otros": ["Firebase", "REST", "Agile", "Scrum", "Kanban"],
        }
    }
};

const SkillsSection = ({ language }) => {
    const { title,skills } = content[language];
    return (
        <Box mt={6}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            {Object.entries(skills).map(([category, items]) => (
                <Box key={category} mt={3}>
                    <Typography variant="subtitle1" gutterBottom>
                        {category}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {items.map((skill, index) => (
                            <Chip key={index} label={skill} />
                        ))}
                    </Stack>
                </Box>
            ))}
        </Box>
    );
};

export default SkillsSection;
