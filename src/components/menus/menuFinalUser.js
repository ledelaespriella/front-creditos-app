import React, {Fragment}from "react";

const MenuFinalUser = (()=>{
    return <Fragment>
         <div id="sidebar-container" class="bg-primary">
        <div class="logo">
          <img id='logo' src="http://localhost:3000/caja-social-white.png" alt="" style={{height:'70px'}} />
        </div>
        <div class="menu w-100 pt-3">
          <a href="#" class="fs-4 font-weight d-block text-light ps-5 pb-4 border-0">
            <i class="icon ion-md-apps lead mr-2"></i>
            Solicitudes de credito
          </a>

          <a href="#" class="fs-4 font-weight d-block text-light ps-5 pb-4 border-0">
            <i class="icon ion-md-people lead mr-2"></i>
            Solicitudes de prorroga
          </a>

          <a href="#" class="fs-4 font-weight d-block text-light ps-5 pb-4 border-0">
            <i class="icon ion-md-stats lead mr-2"></i>
            Historial de pago
          </a>
          <a href="#" class="fs-4 font-weight d-block text-light ps-5 pb-4 border-0">
            <i class="icon ion-md-settings lead mr-2 text-black"></i>
            Mi cuenta
          </a>
        </div>
      </div>
    </Fragment>
});

export default MenuFinalUser;