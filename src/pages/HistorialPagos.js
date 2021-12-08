import React, { useEffect, useState } from 'react';
import HisPagos from '../components/pagos';
import Nav from './../components/navBar';
import Foot from '../components/footer';


const HistorialDePagos = () => {

    return(
        <>
        <Nav />
        <HisPagos/>
        <Foot />
        </>
    ) 
};

export default HistorialDePagos;