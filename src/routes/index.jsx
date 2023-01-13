import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Layout from '../components/sections/Layout';

import Home from '../pages/Home';
import Usuarios from '../pages/Usuarios';
import RestorePassword from '../pages/RestorePassword';
import Register from '../pages/Register';
import MenuFinalUser from '../pages/final_user/MenuFinalUser';
import MisProductos from '../pages/final_user/MisProductos';
import MenuInterUser from '../pages/inter_user/MenuInterUser';
import SolicitudesPlazo from '../pages/SolicitudesPlazo';
import SolicitudesCredito from '../pages/SolicitudesCredito';
import Creditos from '../pages/Creditos';
import Users from '../pages/Users';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout page={<Home />} />} />
                <Route path='/usuarios' element={<Layout page={<Usuarios />} />} />

                {/* Usuarios */}
                <Route path='/final' element={<Layout page={<MenuFinalUser />} />} />
                <Route path='/inter' element={<Layout page={<MenuInterUser />} />} />
                <Route path='/admin' element={<Layout page={<Usuarios />} />} />

                {/* Acceso */}
                <Route path='/recuperar-contraseña' element={<Layout page={<RestorePassword />} />} />
                <Route path='/registro' element={<Layout page={<Register />} />} />

                {/* Usuario final */}
                <Route path='/final/mis_productos' element={<Layout page={<MisProductos />} />} />

                {/* Usuario interno */}9
                <Route path='/solicitudes_prorrogas' element={<Layout page={<SolicitudesPlazo />} />} />
                <Route path='/solicitudes_creditos' element={<Layout page={<SolicitudesCredito />} />} />
                <Route path='/users' element={<Layout page={<Users />} />} />
                <Route path='/creditos' element={<Layout page={<Creditos />} />} />

                {/* Usuario administrativo */}

            </Routes>
        </BrowserRouter>

    )
}
