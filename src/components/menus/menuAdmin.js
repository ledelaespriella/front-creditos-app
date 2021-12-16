import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { PersonOutline, PeopleOutline, MailOutline,  ReaderOutline } from 'react-ionicons'

const MenuAdmin = () => {
  return (
    <Fragment>
      <div id="sidebar-container" class="bg-primary">
        <div class="logo">
          <img
            id="logo"
            src="http://localhost:3000/caja-social-white.png"
            alt=""
            style={{ height: "60px" }}
          />
        </div>
        <div class="menu w-100 mt-5">
          <Link
            to="/admin/creditos"
            class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0"
          >
            <MailOutline
              color={"#00000"}
              height="30px"
              width="30px"
              className="p-2"
            />
            Solicitudes de credito
          </Link>

          <Link
            to="/admin/prorroga"
            class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0"
          >
            <MailOutline
              color={"#00000"}
              height="30px"
              width="30px"
              className="p-2"
            />
            Solicitudes de prorroga
          </Link>

          <Link
            to="/admin/history"
            class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0"
          >
            <ReaderOutline
              color={"#00000"}
              height="30px"
              width="30px"
              className="p-2"
            />
            Historial de pago
          </Link>

          <Link
            to="/admin/usuarios"
            class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0"
          >
            < PeopleOutline
              color={"#00000"}
              height="30px"
              width="30px"
              className="p-2"
            />
            Usuarios internos
          </Link>

          <Link
            to="/admin/usuariosfinales"
            class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0"
          >
            <PersonOutline
              color={"#00000"}
              height="30px"
              width="30px"
              className="p-2"
            />
            Mi cuenta
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuAdmin;
