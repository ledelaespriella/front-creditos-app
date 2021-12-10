import React from "react";
import Nav from "../components/sections/navBar";
import Foot from "../components/sections/footer";

const solicitarPlazo = () => {
  return <>
  <Nav/>
    <section className="bg-light">
      <div className="container">
        

        <div class="row">
          
          <div class="col-6">
          <h1>Solicitar prórroga</h1>
            <div class="row">
              <div class="col-sm-6">
                <label>Producto</label>
                <input type="text" className="form-control"></input>
              </div>
              <div class="col-sm-6">
                <label>Cuotas a aplazar</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>

            <div class="row" >
              <label>Motivo</label>
              <textarea rows="4" cols="50" className="form-control"></textarea>
            </div>

          </div>

          <div class="col-6">
            <img src="https://retos-directivos.eae.es/wp-content/uploads/2017/12/iStock-540376942-e1514130352114.jpg" class="img-fluid" alt="Responsive image"></img>
          </div>

        </div>

      </div>
    </section>
    <Foot/>
    </>
};

export default solicitarPlazo;


