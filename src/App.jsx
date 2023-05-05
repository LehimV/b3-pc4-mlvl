import React from 'react';
//import './App.css'
import Jugador1 from './Componentes/Jugador1';
import Jugador2 from './Componentes/Jugador2';
import Jugador3 from './Componentes/Jugador3';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Jugador1 />
        </div>
        <div className="col-sm-4">
          <Jugador2 />
        </div>
        <div className="col-sm-4">
          <Jugador3 />
        </div>
      </div>
    </div>
  );
};

export default App;
