import './App.css';
import Register from './pages/register';
import GestionUsuario from './pages/gestionUsuarios';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

        {/* Listado de rutas de todos los usuarios */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/recuperacion" element={<ResetPaswword />} /> */}
        <Route path="/registro" element={<Register />} />

        {/* Listado de rutas para el Usuario Interno */}
        {/* <Route path="/adminUI" element={<Dashboard />} />
        <Route path="/adminUI/creditos" element={<ListCreditos/>} />
        <Route path="/adminUI/prorroga" element={<ListProrroga/>} />
        <Route path="/adminUI/creditos/vigentes" element={<ListCreditosVigentes/>} />
        <Route path="/adminUI/creditos/pagos" element={<HistorialPagos/>} /> */}

        {/* Listado de rutas para el usuario final */}
        {/* <Route path="/creditos" element={<ListCreditos/>} />
        <Route path="/prorroga" element={<Listprorroga/>} />
        <Route path="/creditos/pagos" element={<ListPagos/>} />
        <Route path="/creditos/documentos" element={<Documentos/>} /> */}

        {/* Listado de rutas para el usuario administrador */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/admin/usuarios" element={<GestionUsuario />} />

      </Routes>
      <footer class="my-2 pt-2 text-muted text-center text-small">
        <p class="mb-1">Copyright © 2018 Banco Caja Social</p>
        {/* <!-- <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul> --> */}
      </footer>

    </>
  );
}

export default App;
