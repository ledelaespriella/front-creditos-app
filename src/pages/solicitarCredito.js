import React from 'react';
import Nav from './../components/navHome';
import Foot from '../components/footer';
import SolCredito from '../components/solicitarCredito';



const SolicitarCedito = () => {
    
    return<>
        <Nav />
        <SolCredito />
        <Foot style={{alignItems: "flex-end"}}/>
        </>
}

export default SolicitarCedito;