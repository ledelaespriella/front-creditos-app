import React from "react";
import Nav from "../components/navBar";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";

const solicitarPlazo = () => {
  return <>
  <Nav/>
    <section className="bg-light">
      <div className="container">
        <h1>Solicitar prórroga</h1>

        <div class="row">
          
          <div class="col-6">
      
            <div class="row">
              <div class="col-6">
                <label>Producto</label>
                <input type="text" className="form-control"></input>
              </div>
              <div class="col-6">
                <label>Cuotas a aplazar</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>

            <div class="row" >
              <label>Cuotas a aplazar</label>
              <textarea rows="4" cols="50" className="form-control"></textarea>
            </div>

          </div>

          <div class="col-6">
            <img src="https://centrourbano.com/revista/wp-content/uploads/Cartera-de-credito-a-vivienda-crece-8.4-en-febrero-BBVA-635x635.jpg" width="300" height="300"></img>
          </div>

        </div>

      </div>
    </section>
    <Foot/>
    </>
};

export default solicitarPlazo;


