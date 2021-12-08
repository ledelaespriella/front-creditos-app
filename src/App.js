import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Nav from './components/navBar'
import MenuAdmin from './pages/menuAdmin';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<MenuAdmin/>}/>
    </Routes>
  </>
  )
}

export default App;
