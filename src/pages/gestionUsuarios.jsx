import React, { useEffect, useState } from 'react';
import Users from './../components/TableUsers';


const GestionUsuario = () => {

    const [users,setUsers]=useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/users')
        .then(response => response.json())
        .then(data=>setUsers(data))
    },[]);

    return (
        <>
           <Users data={users}/>
        </>
    );

};

export default GestionUsuario;