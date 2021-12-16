import React from "react";
import Contenedor from "../components/contenedorSolicitudes";

const solicutesdPlazo = () => {
  return (
    <>
      <h1 className="text-center">Solicitudes de plazo</h1>

      <div className="overflow-auto" style={{height:'420px'}}>
        <Contenedor />
        <Contenedor />
        <Contenedor />
      </div>
    </>
  );
};

export default solicutesdPlazo;
