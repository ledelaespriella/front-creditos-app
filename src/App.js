import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Dashboard from './pages/dashboard';

function App() {
  return (<Fragment>
    <Routes>
      {/* Rutas de los usuarios */}
      <Route path='/' element={<Home/>}></Route>
      <Route path=''></Route>
      {/*  */}
      <Route path='admin' element={<Dashboard/>}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      {/*  */}
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      {/*  */}
      <Route></Route>
      <Route></Route>
    </Routes>
  </Fragment>
  )
}

export default App;
