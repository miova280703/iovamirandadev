import React from "react";
import { Typography, Grid, Card, CardContent, CardActions, Button, Chip } from "@mui/material";

const content = {
    es: {
        titulo: "Educación",
        projects: [
            {
                title: "Ingenieria en Ciencias y Sistemas",
                place: "Universidad de San Carlos de Guatemala, Guatemala",
                date: "2017 - 2023",                
            },
        ]
    },
    en: {
        titulo: "Education",
        projects: [
            {
                title: "Bachelor's Degree in Science and Systems Engineering",
                place: "Universidad de San Carlos de Guatemala, Guatemala",
                date: "2017 - 2023",                
            },
        ]
    }
};

const EducationSection = ({ language }) => {
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
                                    {project.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.place}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.date}&nbsp;&nbsp;
                                    </Typography>
                                </div><br />
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default EducationSection;
