import React from "react";
import { Avatar, Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";


const content = {
    es: {
        title: "Ingeniera en Ciencias y Sistemas y QA",
        description:
          "Soy Ingeniera en Ciencias y Sistemas y QA con casi 2 años de experiencia en el desarrollo de soluciones tecnológicas de alto rendimiento. " +
          "Me especializo en pruebas explorativas, pruebas de integración a APIs (usando Jest, Supertest y Postman) y pruebas automatizadas con Selenium. " +
          "Como Fullstack Developer, tengo una fuerte experiencia en el desarrollo de aplicaciones desde el frontend hasta el backend, utilizando tecnologías como React, Node.js, y bases de datos. " +
          "Me apasiona el diseño de soluciones creativas y eficientes, con un enfoque en optimización y escalabilidad. " +
          "Siempre enfrento los retos complejos con determinación y busco proporcionar soluciones personalizadas para cada proyecto.",
      },
      en: {
        title: "Systems Engineer and QA",
        description:
          "I am a Systems Engineer and QA with almost 2 years of experience in developing high-performance technological solutions. " +
          "I specialize in exploratory testing, API integration testing (using Jest, Supertest, and Postman), and automated testing with Selenium. " +
          "As a Fullstack Developer, I have strong experience in developing applications from frontend to backend using technologies like React, Node.js, and databases. " +
          "I am passionate about designing creative and efficient solutions with a focus on optimization and scalability. " +
          "I always face complex challenges with determination and strive to provide tailored solutions for each project.",
      },
};

const Header = ({ language }) => {
    const { title, description } = content[language];
    return (
        <Box mt={4} mb={6} display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={3}>
            <Avatar
                alt="Iovana Miranda"
                src={`${process.env.PUBLIC_URL}/profile.jpg`} // Puedes colocar aquí tu imagen de perfil
                sx={{ width: 200, height: 200 }}
            />
            <Box>
                <Typography variant="h5" fontWeight="bold">
                    Iovana Miranda
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={1}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={1} mt={2}>
                    <IconButton href="https://github.com/miova280703" target="_blank" aria-label="GitHub">
                        <GitHub />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/iovana-miranda-5b7742a5/" target="_blank" aria-label="LinkedIn">
                        <LinkedIn />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
};

export default Header;
