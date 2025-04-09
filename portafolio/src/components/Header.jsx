import React from "react";
import { Avatar, Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";


const content = {
    es: {
        title: "Ingeniera en Ciencias y Sistemas",
        description:
          `Soy Ingeniera en Ciencias y Sistemas con sólida experiencia en el desarrollo e implementación de soluciones tecnológicas robustas. 
          Como Fullstack Developer, he trabajado con tecnologías modernas como React, Node.js, Express, MySQL, entre otras, creando aplicaciones escalables y eficientes.
          También tengo conocimientos en DevOps, incluyendo el uso de Docker, Jenkins y pipelines CI/CD, lo que me permite contribuir activamente en entornos de integración y entrega continua.
          Cuento con más de 2 años de experiencia como QA Engineer, especializándome en pruebas exploratorias, pruebas de integración de APIs (usando Jest, SuperTest y Postman) y pruebas automatizadas con Selenium, asegurando productos de alta calidad y confiabilidad.
          Me encanta aprender y tengo la capacidad de adaptarme rápidamente a nuevas tecnologías y entornos. Me apasiona enfrentar retos técnicos complejos, optimizar procesos y diseñar soluciones a la medida para cada proyecto.`,
      },
      en: {
        title: "Science and Systems Engineer",
        description:
          `I am a Systems Engineering graduate with solid experience in developing and implementing robust technological solutions. 
          As a Fullstack Developer, I have worked with modern technologies such as React, Node.js, Express, MySQL, among others, creating scalable and efficient applications.
          I also have knowledge in DevOps, including the use of Docker, Jenkins, and CI/CD pipelines, which allows me to actively contribute in continuous integration and delivery environments.
          I have over 2 years of experience as a QA Engineer, specializing in exploratory testing, API integration testing (using Jest, SuperTest, and Postman), and automated testing with Selenium, ensuring high-quality and reliable products.
          I love learning and have the ability to quickly adapt to new technologies and environments. I am passionate about facing complex technical challenges, optimizing processes, and designing tailored solutions for each project.`,
      },
};

const Header = ({ language }) => {
    const { title, description } = content[language];
    return (
        <Box mt={4} mb={6} display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={3}>
            <Avatar
                alt="Iovana Miranda"
                src={`${process.env.PUBLIC_URL}/image.png`} // Puedes colocar aquí tu imagen de perfil
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
