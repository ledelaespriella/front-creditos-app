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

            <div className="row vh-100 w-100 m-0">
                <div className="col-3 p-0">
                    <SideBar user='Admin' />
                </div>
                <div className="col-12 col-lg-9 p-0 container-fluid">
                    <div className="mx-2 row">
                        <Nav button={<LogOut />} />
                    </div>
                    <div className="mx-sm-3 my-sm-4">
                        <Users data={users} />
                    </div>
                    <div className="bottom-0 w-100">
                        <Foot />
                    </div>
                </div>
            </div>



        </>
    );

};

export default GestionUsuario;