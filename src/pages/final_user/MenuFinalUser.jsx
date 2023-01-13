import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Foot from "../../components/sections/Footer";
import Header from "../../components/sections/Header";

const MenuFinalUser = (() => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between h-100">
        <Header />
        <div className="d-flex flex-grow-1 justify-content-center my-2">
          <div className="row h-100 w-100">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center py-3">
              <div className="card" style={{ "width": "18rem", height: "400px" }}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                    <p className="card-text text-center text-primary fs-5 fw-bold">Mira y gestiona tus productos, paga tus créditos y obtén certificados.</p>
                  </div>
                  <Link to={'/final/mis_productos'} className="btn btn-primary">Mis productos</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center py-3">
              <div className="card" style={{ "width": "18rem", height: "400px" }}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                    <p className="card-text text-center text-primary fs-5 fw-bold">Si necesitas un crédito Leasing, envíanos tu solicitud y uno de nuestros asesores la analizará para tomar una decisión.</p>
                  </div>
                  <Link to={'/final/solicitar_creditos'} className="btn btn-primary">Solicitar crédito</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Foot />
      </div>
    </>)
});

export default MenuFinalUser;