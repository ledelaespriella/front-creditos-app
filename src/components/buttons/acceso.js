import React from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";

const Acceso = (()=>{
    return <section>
        <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="left"
              overlay={
                <Popover id="popover">
                  <Popover.Header>
                    <div className="w-100 d-flex justify-content-center">
                      <p>Acceder</p>
                    </div>
                  </Popover.Header>
                  <Popover.Body>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <a className="btn btn-primary" href="">
                        Iniciar sesion
                      </a>
                    </div>

                    <div className="d-flex justify-content-center">
                      <a href="" className="">
                        crear una cuenta
                      </a>
                    </div>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button className="bg-primary" variant="secondary" id="sesion">
                Acceder
              </Button>
            </OverlayTrigger>
    </section>
})

export default Acceso;