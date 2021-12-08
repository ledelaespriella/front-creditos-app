import React from "react";
import Nav from "../components/navBar";
import Foot from "../components/footer";
import SideBar from "../components/sideBar";

const solicitarCredito = () => {
    
        return<>
        <Nav/>
        <section className="bg-light">
    <div className="container">
      <h1>Solicitar crédito</h1>

      <div class="row">
        
        <div class="col-6">
    
          <div class="row">
            <div class="col-sm-6">
              <label>Valor solocitado</label>
              <input type="text" className="form-control"></input>
            </div>
            <div class="col-sm-6">
              <label>Número de cuotas</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
          <div class="row">
            
            <div class="col-sm-6">
            <label></label>
              <button type="button" className="form-control" >Generar</button>
            </div>
            
          </div>



        </div>

        <div class="col-6">
          <img src="https://gestion.pe/resizer/ml7IA6qY1GXWPUZzukZe7mIohAM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5FDOFYHKIFDMLBVARLRMUBLPPI.jpg" width="300" height="300"></img>
        </div>

      </div>

    </div>
  </section>
      <Foot/>
    </>

};

export default solicitarCredito;

