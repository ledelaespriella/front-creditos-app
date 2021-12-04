import React from "react";
import Nav from "../components/navHome";
import Foot from '../components/footer'

const MenuAdmin = () => {
    return (<section>
        
        <div class="d-flex">

            <div id="sidebar-container" class="bg-primary text-light">

                <div class="logo" style={{height: "80px"}}>
                    <h1 class="font-weight-bold text-center">Template</h1>
                </div>
                    <div class="menu">
                        <a href="" class="fs-5 d-block p-4 py-3"><i class="icon
                                me-3 ion-ios-card"></i>Solicitudes de credito</a>
                        <a href="" class="fs-5 d-block p-4 py-3"><i class="icon
                                me-3 ion-md-mail"></i>Solicitudes de prorroga</a>
                        <a href="" class="fs-5 d-block p-4 py-3"><i class="icon
                                me-3 ion-md-stats"></i>Historial de pagos</a>
                        <a href="" class="fs-5 d-block p-4 py-3"><i class="icon
                                me-3 ion-ios-people"></i>Usuarios internos</a>
                        <a href="" class="fs-5 d-block p-4 py-3"><i class="icon
                                me-3 ion-md-person"></i>Mi cuenta</a>
                    </div>
                </div>

                <div className="w-100">
                    <Nav/> 
                    <Foot/> 
                </div>

            </div>
    </section>)
};

export default MenuAdmin;
