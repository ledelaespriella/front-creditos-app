import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import '../../assets/custom/SideBar.css';

//Images
import genericAvatar from '../../assets/images/generic-avatar.jpg';

const SideBar = () => {

  const [classes, setClass] = useState({
    sideBarOpen: true,
    toggleRotate: false,
  })

  return (
    <>
      <div className={(!classes.sideBarOpen ? 'sidebar--close' : 'sidebar--open') + " sidebar bg-primary text-white"}>

        {/* PROFILE */}

        <div className="profile">
          <Link to={'/inter'} className="menu-bar__link">
            <div className="menu-bar__item-container">
              <img className="profile__avatar" src={genericAvatar} />
              <div className={(!classes.sideBarOpen ? 'hide' : '') + " profile__text"}>
                <span className="profile__title text-white">John Doe</span>
                <span className="profile__subtitle text-white">Administrador</span>
              </div>
            </div>
          </Link>
          <button className={(classes.sideBarOpen ? 'toggle--rotate' : '') + " toggle"} onClick={() => setClass({ ...classes, sideBarOpen: !classes.sideBarOpen })}>
            <i class="bi bi-chevron-right text-primary fw-bold"></i>
          </button>
        </div>
        <hr className="my-0 mx-2  " />

        {/* ITEMS */}

        <div className="menu-bar">
          <ul className="menu-bar__items">
            <li className="menu-bar__item">
              <Link to={'/solicitudes_creditos'} className="menu-bar__link">
                <div className={(!classes.sideBarOpen ? 'justify-content-center' : 'justify-content-start') + " menu-bar__item-container"}>
                  <i className="bi bi-file-earmark-text text-white fs-3"></i>
                  <span className={(!classes.sideBarOpen ? 'hide' : '') + " text-white fw-bold"}>Solicitudes de creditos</span>
                </div>
              </Link>
            </li>
            <li className="menu-bar__item">
              <Link to={'/solicitudes_prorrogas'} className="menu-bar__link">
                <div className={(!classes.sideBarOpen ? 'justify-content-center' : 'justify-content-start') + " menu-bar__item-container"}>
                  <i className="bi bi-file-earmark-text-fill text-white fs-3"></i>
                  <span className={(!classes.sideBarOpen ? 'hide' : '') + " text-white fw-bold"}>Solicitudes de prorrogas</span>
                </div>
              </Link>
            </li>
            <li className="menu-bar__item">
              <Link to={'/users'} className="menu-bar__link">
                <div className={(!classes.sideBarOpen ? 'justify-content-center' : 'justify-content-start') + " menu-bar__item-container"}>
                  <i className="bi bi-people-fill text-white fs-3"></i>
                  <span className={(!classes.sideBarOpen ? 'hide' : '') + " text-white fw-bold"}>Usuarios</span>
                </div>
              </Link>
            </li>
            <li className="menu-bar__item">
              <Link to={'/creditos'} className="menu-bar__link">
                <div className={(!classes.sideBarOpen ? 'justify-content-center' : 'justify-content-start') + " menu-bar__item-container"}>
                  <i className="bi bi-credit-card text-white fs-3"></i>
                  <span className={(!classes.sideBarOpen ? 'hide' : '') + " text-white fw-bold"}>Creditos</span>
                </div>
              </Link>
            </li>

            <li className="menu-bar__item">
              <Link to={'/'} className="menu-bar__link">
                <div className={(!classes.sideBarOpen ? 'justify-content-center' : 'justify-content-start') + " menu-bar__item-container"}>
                  <i className="bi bi-door-open text-white fs-3"></i>
                  <span className={(!classes.sideBarOpen ? 'hide' : '') + " text-white fw-bold"}>Cerrar sesion</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-0 mx-2  " />
      </div>
    </>
  );
};

export default SideBar;
