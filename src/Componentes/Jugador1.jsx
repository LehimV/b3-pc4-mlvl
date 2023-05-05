import React from 'react';
//import imagenJugador1 from '../imagenes/jugador1.jpg';

const Jugador1 = () => {
  return (
    <div className="card">
      <img src={imagenJugador1} className="card-img-top" alt="Jugador 1" />
      <div className="card-body">
        <h5 className="card-title">Jugador 1</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          erat ut mauris feugiat posuere.
        </p>
      </div>
    </div>
  );
};

export default Jugador1;