import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";


const Acceso = (() => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover">
            <Popover.Body>
              <label for="floatingInput" className="text-primary">Email address</label>
              <input
                type="email"
                className="form-control border-primary"
                id="floatingInput"
                placeholder="name@example.com"
              />


              <label for="floatingPassword" className="text-primary">Password</label>
              <input
                type="password"
                className="form-control border-primary"
                id="floatingPassword"
                placeholder="Mi_contraseña"
              />
              <div className="d-flex justify-content-">
                <Link to={'/recuperar-contraseña'}>
                  Recuperar contraseña
                </Link>
              </div>

              <div className="mt-1 d-flex justify-content-center">
                <Link className="btn btn-primary" to='/usuarios'>
                  Iniciar sesion
                </Link>
              </div>

              <div className="d-flex justify-content-center">
                <Link to={'/registro'}>
                  crear una cuenta
                </Link>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <Button>
          Acceder
        </Button>
      </OverlayTrigger>
    </>)
})

export default Acceso;