import React, { useEffect, useState } from 'react';
import Users from './../components/TableUsers';
import Nav from "../components/sections/navBar";
import Foot from "../components/sections/footer";
import SideBar from "../components/sections/sideBar";
import LogOut from '../components/buttons/logout';


const GestionUsuario = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <>

            <div className="row w-100 m-0 d-flex align-content-stretch flex-wrap">
                <div className="col-3 p-0">
                    <SideBar user='Admin' />
                </div>
                <div className="col-12 col-lg-9 p-0 container-fluid">

                    <Nav button={<LogOut />} />
                    <div className="m-3">
                        <Users data={users} />
                    </div>
                    <Foot />

                </div>
            </div>



        </>
    );

};

export default GestionUsuario;