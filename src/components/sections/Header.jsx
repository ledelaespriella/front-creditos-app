import React from "react";

import Acceso from '../buttons/Acceso';

import cajaSocialPng from '../../assets/images/caja-social.png'
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <header>
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            <img src={cajaSocialPng} alt="" style={{ maxHeight: '65px' }} />
          </Link>

          <ul className="navbar-nav ">
            <li className="nav-link">
              <Acceso />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
