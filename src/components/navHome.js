import React from "react";
import { Popover, Button, OverlayTrigger, Form, FloatingLabel } from "react-bootstrap";
import 'jquery/dist/jquery.js'


const Nav = () => {
  return <>
    <section
      className="container-fluid"
      style={{ height: "80px", boxShadow: "-10px -16px black" }}
    >
      <nav className="row">
        <div className="col-6 ">
          <img
            className="ms-4 my-1"
            src="http://localhost:3000/caja-social-logo.png"
            alt=""
            style={{ height: "70px", width: "auto" }}
          />
        </div>

        <ul
          className=" nav col-6 d-flex justify-content-end"
          style={{ height: "80px" }}
        >
          <div className="nav-item me-5 my-auto">
              <OverlayTrigger
                trigger="click"
                key='bottom'
                placement='left'
                rootClose 
                overlay={
                  <Popover id='popover'>
                    <Popover.Header
                    >
                        <div className='w-100 d-flex justify-content-center'>
                        <p>Acceder</p>
                        </div>
                        
                    </Popover.Header>
                    <Popover.Body>
                    <div class="form-floating mb-1">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                      <Button variant="secondary" size="sm">
                        Ingresar
                      </Button>
                    </div>

                    <div className='d-flex justify-content-center mt-1'>
                      <a className='link-primary' href='#' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        ¿Olvidó su contraseña?
                      </a>
                      <resetPassword />
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                      <a className='link-info' href='#' >
                        Registrarse
                      </a>
                    </div>

                    </Popover.Body>
                  </Popover>
                }
              >
                <Button className='bg-primary' variant="secondary" id='sesion'>Acceder</Button>
              </OverlayTrigger>
          </div>
        </ul>
      </nav>
    </section>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Recuperar contraseña</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo electrónico"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <Form.Text className="text-muted">
                  Ingrese el correo registrado en la plataforma
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Recuperar
              </Button>
            </Form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    
  </>;
};

export default Nav;
