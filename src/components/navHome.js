import React from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";
import 'jquery/dist/jquery.js'

const Nav = () => {
  return (
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
                overlay={
                  <Popover id='popover'>
                    <Popover.Header
                    >
                        <div className='w-100 d-flex justify-content-center'>
                        <p>Acceder</p>
                        </div>
                        
                    </Popover.Header>
                    <Popover.Body>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                        <a className='btn btn-primary' href="">
                            Iniciar sesion
                        </a>
                    </div>

                    <div className = 'd-flex justify-content-center'>
                        <a href="" className=''>
                            crear una cuenta
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
  );
};

export default Nav;
