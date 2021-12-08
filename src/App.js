//import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
//import Nav from './components/navHome'
//import MenuAdmin from './pages/adminMenu';
import SolicitarCedito from './pages/solicitarCredito';
import HistorialDePagos from './pages/HistorialPagos';
//import Nav from './components/navBar'
import MenuAdmin from './pages/menuAdmin';
import GenDocumentos from './pages/gendocumentos';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<MenuAdmin/>}/>
      <Route path='/solicitarCredito' element={<SolicitarCedito/>}/>
      <Route path='/generardocumentos' element={<GenDocumentos/>}/>
      <Route path='/historialpagos' element={<HistorialDePagos/>}/>
    </Routes>
  </>
  )
}

export default App;
