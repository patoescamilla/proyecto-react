import React, { useState } from 'react';
import './App.css';
import './MisEstilos.css';

function App() {
  //definir el estado
  const[cuenta, setCuenta] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi app en React esta funcionando</h1>
        <p>Has hecho click {cuenta} veces</p>

        <div>
          <button onClick={ () => setCuenta(cuenta + 1) }>
            Aumentar
          </button> 
          <button onClick={ () => setCuenta(cuenta - 1) }>
            Disminuir
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
