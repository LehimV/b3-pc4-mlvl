import React from 'react';
//import imagenJugador2 from '../imagenes/jugador2.jpg';

const Jugador2 = () => {
  return (
    <div className="card">
      <img src={imagenJugador2} className="card-img-top" alt="Jugador 2" />
      <div className="card-body">
        <h5 className="card-title">Jugador 2</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          erat ut mauris feugiat posuere.
        </p>
      </div>
    </div>
  );
};

export default Jugador2;
