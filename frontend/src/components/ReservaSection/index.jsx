import React from "react";
import { ReservaContainer } from "./ReservasElement";

const Reserva = () => {
    return (
      <ReservaContainer id="reservas"> 
        <div className="title">
          <div className="titleHolder">
            <h2>Mis reservas</h2>
          </div>
        </div>
      </ReservaContainer>
    );
  };
  
  export default Reserva;
