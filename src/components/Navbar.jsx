import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Portafolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/projects">Proyectos</Button>
        <Button color="inherit" component={Link} to="/contact">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
