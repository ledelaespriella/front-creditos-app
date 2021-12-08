import React from 'react';
import Nav from './../components/navHome'
import Foot from '../components/footer'

const generarCertificado = () => {
    return<>
    <Nav/>
    <section className="bg-light">
    <div className="container">
      <h1>Generar certificados</h1>

      <div class="row">
        
        <div class="col-6">
    
          <div class="row">

            <div class="col-6">
              <label>Producto</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
            
          <div class="row">
            <div class="col-6">
              <label></label>
              <button type="button" className="form-control" >Generar</button>
            </div>
            
          </div>
          


      
        </div>

        <div class="col-6">
          <img src="https://unexplicamx.com/wp-content/uploads/2021/05/Solicitud-de-Credito-Formato-Word.jpg" class="rounded" width="300" height="300"></img>
        </div>

      </div>

    </div>
  </section>
  <Foot/>
    </>
};

export default generarCertificado;


