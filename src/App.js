import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Nav from './components/navHome'
import MenuAdmin from './pages/adminMenu';

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
