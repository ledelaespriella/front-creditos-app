import React, { useEffect, useState } from 'react';
import HisPagos from '../components/pagos';


const HistorialDePagos = () => {

    return <HisPagos/>

    // const [users,setUsers]=useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3004/historial')
    //     .then(response => response.json())
    //     .then(data=>setUsers(data))
    // },[]);

    // return (
    //     <>
    //        <HisPagos data={users}/>
    //     </>
    // );

};

export default HistorialDePagos;