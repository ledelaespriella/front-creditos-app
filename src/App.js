import './App.css';
import Register from './pages/register';
import GestionUsuario from './pages/gestionUsuarios';
import ListPagos from './pages/simularPagos';

import Home from './pages/home';
import SolicitudesPlazo from './pages/solicitudesPlazo';
import SolicitarCredito from './pages/solicitarCredito';
import GenerarCertificado from './pages/generarCertificado';
import SolicitarPlazo from './pages/solicitarPlazo';
import Dashboard from './pages/dashboard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        {/* Listado de rutas de todos los usuarios */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/recuperacion" element={<ResetPaswword />} /> */}
        <Route path="/registro" element={<Register />} />

        {/* Listado de rutas para el Usuario Interno */}
        {/* <Route path="/adminUI" element={<Dashboard />} /> */}
        {/* <Route path="/adminUI/creditos" element={<ListCreditos/>} /> */}
        {/* <Route path="/adminUI/prorroga" element={<Solicitudes_plazo/>} /> */}
        {/* <Route path="/adminUI/creditos/vigentes" element={<ListCreditosVigentes/>} /> */}
        {/* <Route path="/adminUI/creditos/pagos" element={<HistorialPagos/>} /> */}

        {/* Listado de rutas para el usuario final */}
        <Route path='/creditos' element={<SolicitarCredito/>}/>
        <Route path='/solicitarPlazo' element={<SolicitarPlazo/>}/>
        <Route path='/creditos/prorroga' element={<SolicitudesPlazo/>}/>
        <Route path="/creditos/pagos" element={<ListPagos/>} />
        {/* <Route path="/creditos/documentos" element={<Documentos/>} /> */}
        <Route path='/creditos/certificado' element={<GenerarCertificado/>}/>


        {/* Listado de rutas para el usuario administrador */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/usuarios" element={<GestionUsuario />} />

      </Routes>

    </>
  );

}

export default App;
