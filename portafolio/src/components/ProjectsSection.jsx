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
                description: ["• Desarrollo de pruebas automatizadas para APIs Rest."],
                technologies: ["Postman", "Jest", "SuperTest"],
                github: "",
                demo: ""
            },
            {
                title: "Sistema de Manejo de Finanzas",
                place: "Ministerio de Salud, Guatemala",
                date: "Noviembre 2024 - Marzo 2025",
                current: false,
                description: ["• Automatización de la gestión de renglones y fuentes de gasto.\n",
                    "• Implementación de un módulo para construir presupuestos agregando cada fila la información correspondiente.\n",
                    "• Registro de reprogramaciones y compras realizadas con trazabilidad completa.\n",
                    "• Generación de reportes estratégicos para la toma de decisiones institucionales."
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose"],
                github: "",
                demo: ""
            },
            {
                title: "Sistema de Control de Ejecución Financiera",
                place: "División de Educación a Distancia en Entornos Virtuales, Universidad de San Carlos de Guatemala",
                date: "Febrero 2024 - Septiembre 2024",
                current: false,
                description: ["• Automatización de la gestión de renglones de gasto, meses, años y creación de partidas presupuestarias.\n",
                    "• Implementación de un módulo para construir anteproyectos asociados a sus respectivas partidas, con la opción de duplicar datos de años anteriores para mayor agilidad.\n",
                    "• Integración de exportación de anteproyectos en formato Excel para su revisión y aprobación oficial.\n",
                    "• Desarrollo de funcionalidad para calendarizar compras por renglón presupuestario.\n",
                    "• Registro de reprogramaciones, transferencias y compras realizadas con trazabilidad completa.\n",
                    "• Generación de reportes estratégicos para la toma de decisiones institucionales."
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
                description: [
                    "• Apoyo en la enseñanza del pensamiento lógico para la resolución de problemas.",
                    "• Colaboración con la catedrática en el desarrollo de actividades para fortalecer habilidades analíticas en los estudiantes."
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
                description: ["• Design and implementation of automated testing for RESTful APIs."],
                technologies: ["Postman", "Jest", "SuperTest"],
                github: "",
                demo: ""
            },
            {
                title: "Finance Management System",
                place: "Ministerio de Salud, Guatemala",
                date: "November 2024 - March 2025",
                current: false,
                description: ["• Automation of the management of budget lines and funding sources.\n",
                    "• Implementation of a module to build budgets by adding detailed information row by row.\n",
                    "• Recording of reschedulings and completed purchases with full traceability.\n",
                    "• Generation of strategic reports to support institutional decision-making."
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose"],
                github: "",
                demo: ""
            },
            {
                title: "Budget Management System",
                place: "División de Educación a Distancia en Entornos Virtuales, Universidad de San Carlos de Guatemala",
                date: "February 2024 - September 2024",
                current: false,
                description: ["• Automated the management of expense categories and the creation of budget line items.\n",
                    "• Built a module for generating budget drafts linked to their respective budget lines, with the option to duplicate data from previous years for faster setup.\n",
                    "• Integrated export functionality to Excel format for draft submission and approval.\n",
                    "• Developed a calendar system to schedule purchases by budget category.\n",
                    "• Enabled tracking of reschedulings, transfers, and all completed purchases.\n",
                    "• Generated strategic reports to support data-driven institutional decision-making."
                ],
                technologies: ["React", "Node.js", "Express", "JWT", "MySQL", "Sequelize", "Docker", "Docker Compose", "Jenkins"],
                github: "",
                demo: ""
            },
            {
                title: "Teaching Assistant - Logic Systems Course",
                place: "Universidad de San Carlos de Guatemala",
                date: "January 2023 November 2023",
                current: false,
                description: [
                    "• Supported students in developing logical thinking for problem solving.",
                    "• Worked alongside the professor to design learning activities that foster analytical skills."
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
    console.log(language);
    console.log(projects);
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
                                {project.description.map((desc, i) => (
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
