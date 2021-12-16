import "./App.css";
import Register from "./pages/register";
import GestionUsuario from "./pages/gestionUsuarios";
import ListPagos from "./pages/simularPagos";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Solicitudes_plazo from "./pages/solicitudesPlazo";
import SolicitarCredito from "./pages/solicitarCredito";
import Generar_certificado from "./pages/generarCertificado";
import Solicitar_plazo from "./pages/solicitarPlazo";
import { Routes, Route } from "react-router-dom";
import MenuFinal from "./pages/MenuFinal";
import Creditos from "./pages/creditos";
import Documents from "./pages/documents";
import Bienvenido from "./pages/bienvenidoFinal";
import solicitarPlazo from "./pages/solicitarPlazo";
import Usuarios from "./components/usuarios";

function App() {
  return (
    <>
      <Routes>
        {/* Listado de rutas de todos los usuarios */}
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        {/* <Route path="/recuperacion" element={<ResetPaswword />} /> */}

        {/* Listado de rutas para el Usuario Interno */}
        <Route path="/adminUI" element={<Dashboard user={"UI"}/>} />
         <Route
          path="/adminUI/prorroga"
          element={<Dashboard user='UI' page={<Solicitudes_plazo/>}/>}
        />
        {/* <Route path="/adminUI/creditos" element={<ListCreditos/>} /> */}
        {/* <Route path="/adminUI/creditos/vigentes" element={<ListCreditosVigentes/>} /> */}
        {/* <Route path="/adminUI/creditos/pagos" element={<HistorialPagos/>} /> */}

      
        {/* Listado de rutas para el usuario final */}
        <Route
          path="/usuariofinal"
          element={<MenuFinal page={<Bienvenido />} />}
        />
        <Route path="/creditos" element={<MenuFinal page={<Creditos />} />} />{" "}
        {/*En desarrollo*/}
        <Route
          path="/creditos/solicitar"
          element={<MenuFinal page={<SolicitarCredito />} />}
        />
        <Route
          path="/creditos/prorroga"
          element={<MenuFinal page={<Solicitar_plazo />} />}
        />
        <Route path="/creditos/pagos" element={<MenuFinal />} />
        <Route
          path="/creditos/documentos"
          element={<MenuFinal page={<Documents />} />}
        />{" "}
        {/*En desarrollo*/}
        <Route
          path="/creditos/certificado"
          element={<MenuFinal page={<Generar_certificado />} />}
        />

        {/* Listado de rutas para el usuario administrador */}
        <Route
          path="/admin"
          element={<Dashboard user='Admin'/>}
        />
        <Route
          path="/admin/prorroga"
          element={<Dashboard user='Admin' page={<Solicitudes_plazo/>}/>}
        />
        <Route
          path="/admin/usuarios"
          element={<Dashboard user='Admin' page={<GestionUsuario />} />}
        />
        {/* <Route path="/admin" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
