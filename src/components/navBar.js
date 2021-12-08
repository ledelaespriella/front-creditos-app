import React from "react";
import "jquery/dist/jquery.js";
import Acceso from './buttons/acceso'
import LogOut from './buttons/logout'



const Nav = () => {
  return (
    <section className="container-fluid w-100" style={{ height: "80px" }}>
      <nav className="row">
        <ul
          className=" nav col-12 d-flex justify-content-end shadow-sm"
          style={{ height: "80px"}}
        >
          <div className="nav-item me-5 my-auto">
            <LogOut/>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
