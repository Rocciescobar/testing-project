import React, { Component } from 'react';
import { Button, Typography, Link } from 'react-fancy-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Probando la guia de estilos...
        </p>
        <Typography bitter h1>Esto es una tipografía</Typography>
        <Typography bold h3>Esto es una tipografía</Typography>
        <Typography paragraph>Esto es una tipografía </Typography>
        <Link bold href="https://www.w3schools.com">Soy link</Link>
        <Link colorSA href="https://www.w3schools.com">Soy link</Link>
        <div>
          <Button> conoce más </Button>
        </div>
        <div>
          <Button primary small> CONOCE MAS </Button>
        </div>
        <div>
          <Button secondaryB small> conoce mas </Button>
        </div>
      </div>
    );
  }
}

export default App;
