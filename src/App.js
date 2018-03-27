import React, { Component } from 'react';
import { BtnSecondary } from 'react-fancy-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Probando la guia de estilos...
        </p>
        <BtnSecondary label="Soy un botón" />
      </div>
    );
  }
}

export default App;
