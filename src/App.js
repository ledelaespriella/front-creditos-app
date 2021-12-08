import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Nav from './components/navBar'
import Solicitudes_plazo from './pages/solicitudesPlazo';
import Solicitudes_plazo from './pages/solicitarCredito';
import Generar_certificado from './pages/generarCertificado';
import Solicitar_plazo from './pages/solicitarPlazo';


function App() {
  return (<>
    <Routes>
      <Route path='/solicitudesPlazo' element={<Solicitudes_plazo/>}/>
      <Route path='/solicitarCredito' element={<solicitar_credito/>}/>
      <Route path='/generarCertificado' element={<Generar_certificado/>}/>
      <Route path='/solicitarPlazo' element={<Solicitar_plazo/>}/>
    </Routes>
  </>
  )
}

export default App;
