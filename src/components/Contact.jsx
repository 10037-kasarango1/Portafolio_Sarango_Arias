import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Contacto
      </Typography>
      <form>
        <TextField label="Nombre" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField
          label="Mensaje"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
