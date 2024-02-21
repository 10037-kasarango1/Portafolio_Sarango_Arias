import React, { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button, Collapse } from '@mui/material';
import Katherine from '../assets/Katherine.jpg'; 
import Anthony from '../assets/Anthony.jpg'; 

const Home = () => {
  // Estado inicial para controlar la visualización de información adicional de cada tarjeta
  const [showMore, setShowMore] = useState({
    persona1: false,
    persona2: false,
  });

  // Función para manejar el cambio de estado de cada tarjeta
  const handleShowMore = (persona) => {
    setShowMore(prevState => ({ ...prevState, [persona]: !prevState[persona] }));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenidos a Nuestro Portafolio
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Katherine Sarango</Typography>
              <img src={Katherine} alt="Persona 1" style={{ maxWidth: '100%', height: 'auto', width: '200px', display: 'block', margin: 'auto' }} />
              <Typography variant="body1" style={{ fontSize: '0.875rem', textAlign: 'left', marginTop: '8px' }}>Estudiante de sexto semestre de Tecnologías de la Información en la Universidad de las Fuerzas Armadas ESPE.</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center', padding: '8px' }}>
              <Button size="small" onClick={() => handleShowMore('persona1')}>+ ver más</Button>
            </CardActions>
            <Collapse in={showMore.persona1} timeout="auto" unmountOnExit>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="body2" style={{ marginBottom: '12px' }}>Redes Sociales:</Typography>
                <Button href="https://www.instagram.com/andreii15_a/" target="_blank">Instagram</Button>
                <Button href="https://www.facebook.com/andrea.sarango.5076/" target="_blank">Facebook</Button>
                <Button href="https://www.tiktok.com/@24.anny.12" target="_blank">TikTok</Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Anthony Arias</Typography>
              <img src={Anthony} alt="Persona 2" style={{ maxWidth: '100%', height: 'auto', width: '250px', display: 'block', margin: 'auto' }} />
              <Typography variant="body1" style={{ fontSize: '0.875rem', textAlign: 'left', marginTop: '8px' }}>Estudiante de sexto semestre de Tecnologías de la Información en la Universidad de las Fuerzas Armadas ESPE.</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center', padding: '8px' }}>
              <Button size="small" onClick={() => handleShowMore('persona2')}>+ ver más</Button>
            </CardActions>
            <Collapse in={showMore.persona2} timeout="auto" unmountOnExit>
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="body2" style={{ marginBottom: '12px' }}>Redes Sociales:</Typography>
                <Button href="https://www.instagram.com/itsaxelarias/" target="_blank">Instagram</Button>
                <Button href="https://www.facebook.com/alexis.ariashurtado" target="_blank">Facebook</Button>
                <Button href="https://www.tiktok.com/@axelitshere" target="_blank">TikTok</Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
