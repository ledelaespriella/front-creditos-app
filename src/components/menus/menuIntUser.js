import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { ReaderOutline } from 'react-ionicons';
import { MailOutline } from 'react-ionicons';
import { PersonOutline } from 'react-ionicons'

const MenuFinalUser = (() => {
  return <Fragment>
    <div id="sidebar-container" className="bg-primary">
      <div class="logo">
        <img id='logo' className="mt-3" src="http://localhost:3000/caja-social-white.png" alt="" style={{ height: '60px' }} />
      </div>
      <hr className="mx-auto text-light" style={{ width: '95%'}} />
      <div class="menu w-100 mt-5">
        <Link to="#" class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0">
          <MailOutline
            color={'#00000'}
            height="30px"
            width="30px"
            className='p-2'
          />
          Solicitudes de credito
        </Link>

        <Link to="/adminUI/prorroga" class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0">
          <MailOutline
            color={'#00000'}
            height="30px"
            width="30px"
            className='p-2'
          />
          Solicitudes de prorroga
        </Link>

        <Link to="#" class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0">
          <ReaderOutline
            color={'#00000'}
            height="30px"
            width="30px"
            className='p-2'
          />
          Historial de pago
        </Link>
        <Link to="#" class="fs-4 font-weight d-block text-light ps-2 pb-4 border-0">
          <PersonOutline
            color={'#00000'}
            height="30px"
            width="30px"
            className='p-2'
          />
          Mi cuenta
        </Link>
      </div>
    </div>
  </Fragment>
});

export default MenuFinalUser;