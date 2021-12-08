import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Nav from './components/navBar'
import Solicitudes_plazo from './pages/solicitudesPlazo';
import SolicitarCredito from './pages/solicitarCredito';
import Generar_certificado from './pages/generarCertificado';
import Solicitar_plazo from './pages/solicitarPlazo';


function App() {
  return (<>
    <Routes>
      <Route path='/solicitudesPlazo' element={<Solicitudes_plazo/>}/>
      <Route path='/solicitarCredito' element={<SolicitarCredito/>}/>
      <Route path='/generarCertificado' element={<Generar_certificado/>}/>
      <Route path='/solicitarPlazo' element={<Solicitar_plazo/>}/>
      <Route path="/adminUI/prorroga" element={<Solicitudes_plazo/>} />
    </Routes>
  </>
  )
}

export default App;
