import React from "react";
import "jquery/dist/jquery.js";

const Nav = (props) => {

  let dis = "block";
  if (props.img == undefined) {
    dis = "none"
  }

  return (
    <section className="container-fluid w-100" style={{ height: "80px" }}>
      <nav className="row">
        <div
          className="nav col-12 justify-content-between shadow-sm"
          style={{ height: "80px"}}
        >
          <div className="nav-item ms-5 my-auto" style={{display:{dis}}}>
            <img src={props.img} alt="" style={{height:'65px'}}/>
          </div>
          <div className="nav-item me-5 my-auto">{props.button}</div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
