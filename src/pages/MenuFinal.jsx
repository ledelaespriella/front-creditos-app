import React, { Fragment } from "react";
import Header from "../components/sections/Header";
import Foot from "../components/sections/footer";
import NavFinal from "../components/buttons/navFinalUser";
import LogOut from '../components/buttons/logout'


const MenuFinal = (props) => {
  return (
    <>
      <div className="container-fluid p-0 h-100 d-flex flex-column justify-content-between">

        <Header button={<LogOut />} img='http://localhost:3000/caja-social-logo.png' />

        <div>
          <div>
            {props.page}
          </div>
          <div className="row my-5">
            <NavFinal />
          </div>
        </div>

        <Foot />

      </div>

    </>
  );
};

export default MenuFinal;
