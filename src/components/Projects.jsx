import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
    
const Projects = () => {
  const projects = [
    { title: "Librerías en Aplicaciones Web", description: "Librerías para la creación de Web Components, como LitElement, React o Vue.js..", link: "https://github.com/10037-kasarango1/Librerias-en-una-Aplicacion-Web" },
    { title: "Uso de Two – Way Data Binding en Web Components", description: " Implementación de Two – Way Data Binding en un componente desarrollado con LitElement, React o Vue.js para lograr la actualización automática de la interfaz de usuario al modificar el modelo.", link: "https://github.com/10037-kasarango1/Uso-de-Two-Way-Data-Binding" },
    { title: "Eventos y Listeners", description: "Implementación de eventos y listeners en una aplicación React desarrollada con Vite.", link: "https://github.com/10037-kasarango1/Tarea_3" },
    { title: "Solución de Bugs y Consumo de Backend", description: "Solución de dos bugs identificados en el Sistema de Agendamiento de Citas y establecer la conexión entre el frontend y el backend mediante el endpoint de actualización.", link: "https://github.com/10037-kasarango1/agendamiento_citas/tree/Grupo1_Sistema" },
    { title: "Gestor de Tareas", description: "Aplicación de los conceptos sobre Comportamientos en Web Components en un contexto real.", link: "https://github.com/10037-aaarias6/actividad-5-arias-sarango" },
    { title: "Evaluación Conjunta", description: "Sistema de inventario funcional para una bodega utilizando tecnologías modernas como Firebase o Supabase como backend y React para el frontend.", link: "https://github.com/10037-kasarango1/Conjunta" },
    { title: "Evaluación Intermedia", description: "Sistema de evaluación estudiantil permitirá a los docentes de la asignatura de Introducción a la Programación evaluar los conocimientos de los estudiantes mediante pruebas y cuestionarios en línea.", link: "https://github.com/10037-aaarias6/evaluacionpicp2" },
    { title: "React con Firebase", description: "Firebase ofrece servicios de autenticación seguros y fáciles de usar, lo que permite a los desarrolladores agregar rápidamente funciones de inicio de sesión y registro a sus aplicaciones web.", link: "https://github.com/10037-kasarango1/Actividad06_Firebase" },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Proyectos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ flex: '1' }}>
                  {project.description}
                </Typography>
                <CardActions>
                  <Button size="small" onClick={() => window.location.href = project.link}>Ver Más</Button>
                </CardActions>
                <div style={{ height: '16px' }}></div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginBottom: '24px' }}></div>
    </Container>
  );
};

export default Projects;
