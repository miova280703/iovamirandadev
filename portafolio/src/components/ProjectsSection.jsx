import React from "react";
import { Typography, Grid, Card, CardContent, CardActions, Button, Chip } from "@mui/material";

const content = {
    es: {
        titulo: "Proyectos",
        projects: [
            {
                title: "Ingeniero Middle de Automatización de Pruebas",
                place: "Banco Industrial, Guatemala",
                date: "Junio 2023",
                current: true,
                description: "Desarrollo de pruebas automatizadas para APIs de Open Banking.",
                key: "Principales Logros:",
                keys: [
                    "• Elaboración de pruebas explorativas y manuales al sitio web de API Market.",
                    "• Implementación de pruebas de regresión automatizadas para garantizar la estabilidad del sistema tras cada actualización.",
                    "• Colaboración con el equipo de desarrollo para identificar y resolver problemas de calidad en las APIs.",
                    "• Reduje el tiempo de elaboración del script de pruebas en un 80% al elaborar un programa para generar el script.",
                    "• Reduje un 30% los errores en documentación al realizar un programa para validar las documentaciones tecnicas de las APIs.",
                    "• Reduje el tiempo de automatización de pruebas en un 70% al elaborar una página web que genera la colección con el codigo de prueba de cada request.",
                ],
                technologies: ["Postman", "Newman", "Jest", "SuperTest"],
                github: "",
                demo: ""
            },
            {
                title: "Desarrolladora de Software FullStack",
                place: "Ministerio de Salud Pública, Guatemala",
                date: "Noviembre 2024 - Marzo 2025",
                current: false,
                description: "Diseño e implementación de un Sistema de Manejo de Finanzas para optimizar la gestión del presupuesto, reemplazando procesos manuales basados en hojas de cálculo.",
                key: "Principales Logros:",
                keys: [
                    "• Desarrollo de un backend seguro con autenticación mediante JWT y validación de datos.\n",
                    "• Creación de microservicios desacoplados, dockerización individual de cada servicio y orquestación con Docker Compose.\n",
                    "• Diseño y desarrollo de una interfaz web intuitiva para la carga, edición y visualización de datos financieros.\n",
                    "• Implementación de consultas SQL optimizadas para la generación de reportes de ejecución presupuestaria.\n",
                    "• Implementación de un sistema de gestión de usuarios con roles y permisos específicos para cada función del sistema.\n",
                    "• Reducción del 60% de errores manuales, mejorando significativamente la trazabilidad y transparencia de los procesos administrativos.\n",
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose"],
                github: "",
                demo: ""
            },
            {
                title: "Desarrolladora de Software FullStack",
                place: "División de Educación a Distancia en Entornos Virtuales, Universidad de San Carlos de Guatemala",
                date: "Febrero 2024 - Septiembre 2024",
                current: false,
                description: "Diseño e implementación de un Sistema de Control de Ejecución Financiera para optimizar la gestión del presupuesto y las adquisiciones, reemplazando procesos manuales basados en hojas de cálculo.",
                key: "Principales Logros:",
                keys: [
                    "• Desarrollo de un backend seguro con autenticación mediante JWT, validación de datos y control de acceso por roles.\n",
                    "• Creación de microservicios desacoplados, dockerización individual de cada servicio y orquestación con Docker Compose.\n",
                    "• Automatización de procesos de integración y entrega continua (CI/CD) utilizando Jenkins.\n",
                    "• Diseño y desarrollo de una interfaz web intuitiva para la carga, edición y visualización de datos financieros.\n",
                    "• Implementación de consultas SQL optimizadas para la generación de reportes de ejecución presupuestaria.\n",
                    "• Ejecución de pruebas automatizadas para garantizar la calidad del sistema.\n",
                    "• Implementación de un sistema de gestión de usuarios con roles y permisos específicos para cada función del sistema.\n",
                    "• Reducción del 40% de errores manuales, mejorando significativamente la trazabilidad y transparencia de los procesos administrativos.\n",
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose", "Jenkins"],
                github: "",
                demo: ""
            },
            {
                title: "Docente Auxiliar - Curso de Lógica de Sistemas",
                place: "Universidad de San Carlos de Guatemala",
                date: "Enero 2023 - Noviembre 2023",
                current: false,
                description: "Apoyo en la docencia y el acompañamiento académico de estudiantes en el curso de Lógica de Sistemas.",
                key: "Principales Logros:",
                keys: [
                    "• Preparar y presentar materiales didácticos, ejercicios y talleres prácticos enfocados en la resolución de problemas mediante el pensamiento lógico y estructurado.",
                    "• Brindar asistencia personalizada a estudiantes, resolviendo dudas teóricas y prácticas sobre lógica proposicional, tablas de verdad, diagramas de flujo, pseudocódigo y estructuras de control básicas.",
                    "• Colaborar con el profesor en la elaboración de actividades de aprendizaje que fomenten el desarrollo de habilidades analíticas y de resolución de problemas en los estudiantes.",
                    "• Evaluar el desempeño de los estudiantes mediante la corrección de ejercicios y hojas de trabajo, proporcionando retroalimentación constructiva para mejorar su comprensión de los conceptos.",
                    "• Participar en reuniones académicas y de planificación con el equipo docente para mejorar la calidad del curso y la experiencia de aprendizaje de los estudiantes.",
                    "• Fomentar un ambiente de aprendizaje colaborativo y motivador, promoviendo la participación activa de los estudiantes en clase y el trabajo en equipo.",
                    "• Desarrollar materiales complementarios, como guías de estudio, para apoyar el aprendizaje autónomo de los estudiantes.",
                    "• Contribuir a la mejora continua del curso mediante la recopilación de comentarios de los estudiantes y la implementación de sugerencias para optimizar el contenido y la metodología de enseñanza.",
                    "• Brindar una conferencia a los estudiantes del tema de modelos mentales y paradigmas.",
                ],
                technologies: ["Lógica", "Resolución de Problemas", "Educación"],
                github: "",
                demo: ""
            },
        ]
    },
    en: {
        titulo: "Projects",
        projects: [
            {
                title: "Mid-Level Test Automation Engineer",
                place: "Banco Industrial, Guatemala",
                date: "June 2023",
                current: true,
                description: "Development of automated tests for Open Banking APIs.",
                key: "Key Achievements:",
                keys: [
                    "• Created exploratory and manual tests for the API Market website.",
                    "• Implemented automated regression tests to ensure system stability after each update.",
                    "• Collaborated with the development team to identify and resolve quality issues in APIs.",
                    "• Reduced test script creation time by 80% by developing a program to generate the script.",
                    "• Reduced documentation errors by 30% by creating a program to validate API technical documentation.",
                    "• Reduced test automation time by 70% by developing a web page that generates a collection with the test code for each request."
                ],
                technologies: ["Postman", "Newman", "Jest", "SuperTest"],
                github: "",
                demo: ""
            },
            {
                title: "FullStack Software Developer\n",
                place: "Ministerio de Salud, Guatemala",
                date: "November 2024 - March 2025",
                current: false,
                description: "Design and implementation of a Financial Management System to optimize budget and procurement management, replacing manual processes based on spreadsheets.",
                key: "Key Achievements:",
                keys: [
                    "• Developed a secure backend with JWT authentication and data validation.\n",
                    "• Created decoupled microservices, containerized each with Docker, and orchestrated them using Docker Compose.\n",
                    "• Designed and developed an intuitive web interface for loading, editing, and visualizing financial data.\n",
                    "• Implemented optimized SQL queries to generate budget execution reports.\n",
                    "• Implemented a user management system with specific roles and permissions for each function.\n",
                    "• Reduced manual errors by 60%, significantly improving the traceability and transparency of administrative processes.\n"
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose"],
                github: "",
                demo: ""
            },
            {
                title: "FullStack Software Developer\n",
                place: "Division of Distance Education in Virtual Environments, University of San Carlos of Guatemala\n",
                date: "February 2024 – September 2024\n",
                current: false,
                description: "Designed and implemented a Financial Execution Control System to optimize budget and procurement management, replacing manual processes based on Excel spreadsheets.\n",
                key: "Key Achievements:",
                keys: [
                    "• Developed a secure backend with JWT authentication, data validation, and role-based access control.\n",
                    "• Created decoupled microservices, containerized each with Docker, and orchestrated them using Docker Compose.\n",
                    "• Automated CI/CD pipelines using Jenkins for continuous integration and delivery.\n",
                    "• Designed and developed an intuitive web interface for loading, editing, and visualizing financial data.\n",
                    "• Implemented optimized SQL queries to generate budget execution reports.\n",
                    "• Executed automated tests to ensure software quality.\n",
                    "• Implemented a user management system with specific roles and permissions for each function.\n",
                    "• Reduced manual errors by 40%, significantly improving the traceability and transparency of administrative processes.\n"
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose", "Jenkins"],
                github: "",
                demo: ""
            },
            {
                title: "Teaching Assistant - Logic Systems Course",
                place: "University of San Carlos of Guatemala",
                date: "January 2023 - November 2023",
                current: false,
                description: "Support in teaching and academic assistance for students in the Logic Systems course.",
                key: "Key Achievements:",
                keys: [
                    "• Prepare and deliver educational materials, exercises, and practical workshops focused on problem-solving through logical and structured thinking.",
                    "• Provide personalized assistance to students by addressing theoretical and practical questions related to propositional logic, truth tables, flowcharts, pseudocode, and basic control structures.",
                    "• Collaborate with the professor in designing learning activities that promote the development of analytical and problem-solving skills among students.",
                    "• Assess student performance by grading exercises and worksheets, offering constructive feedback to enhance their understanding of the concepts.",
                    "• Participate in academic and planning meetings with the teaching team to improve course quality and the student learning experience.",
                    "• Foster a collaborative and motivating learning environment, encouraging active student participation and teamwork.",
                    "• Develop supplementary materials, such as study guides, to support students' independent learning.",
                    "• Contribute to the continuous improvement of the course by collecting student feedback and implementing suggestions to optimize content and teaching methodology.",
                    "• Deliver a lecture on the topic of mental models and paradigms to the students.",
                ],
                technologies: ["Logic", "Problem Solving", "Education"],
                github: "",
                demo: ""
            },

        ]
    }
};

const ProjectsSection = ({ language }) => {
    const { titulo, projects } = content[language];
    return (
        <>
            <Typography variant="h5" mt={6} mb={2}>
                {titulo}
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.place}
                                </Typography>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.date}
                                    </Typography>
                                    {project.current && (
                                        <Chip
                                            label={language === "es" ? "En curso" : "Current"}
                                            color="primary"
                                            size="small"
                                            style={{ fontWeight: "bold" }}
                                        />
                                    )}
                                </div><br />
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                                    {project.key}
                                </Typography>
                                {project.keys.map((desc, i) => (
                                    <Typography variant="body2" color="text.secondary">
                                        {desc}
                                    </Typography>
                                ))}

                                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 5 }}>
                                    {project.technologies.map((tech, i) => (
                                        <Chip key={i} label={tech} size="small" />
                                    ))}
                                </div>
                            </CardContent>
                            <CardActions>
                                {project.github && (
                                    <Button size="small" href={project.github} target="_blank">
                                        GitHub
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button size="small" href={project.demo} target="_blank">
                                        Ver Demo
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProjectsSection;
