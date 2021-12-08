import React from "react";
import Nav from "../components/navBar";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";
import Contenedor from "../components/contenedorSolicitudes"

const solicutesdPlazo = () => {
    return<>
    <Nav/>
    <h1>Solicitudes de plazo</h1>
    <Contenedor/>
    <Contenedor/>
    
    <Foot/>
    </>

};

export default solicutesdPlazo;