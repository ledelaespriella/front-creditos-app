import React from "react";

const Header = () => {
  return ( 

    <div className="container">
   
      
    <div class="border">


    <div class="row">


      <div class="col-md-4">  

      <div class="row justify-content-center">
      <div class="row">
        <label>Producto</label>
        <input type="text" className="form-control"></input>
      </div>
      <div class="row">
        <label>#cuotas</label>
        <input type="text" className="form-control"></input>
      </div>
      <div class="row">
        <label>Fecha solicitud</label>
        <input type="text" className="form-control"></input>
      </div>
      </div>

      </div>

      <div class="col-md-4">  

      <div class="row justify-content-center">
      <div class="row">
        <label>Motivo</label>
        <textarea rows="6" cols="50" className="form-control"></textarea>
        
      </div>
      </div>

      </div>        

       <div class="col-md-4">  

      <div class="row justify-content-center">
      <div class="row">
      
        <button type="button" className="form-control" >Aceptar</button>
        
      </div>
      <div class="row">
        
        <button type="button" className="form-control" >Rechazar</button>
        
      </div>
      </div>

      </div>    



    </div>



    </div>

  </div>








   );
};

export default Header;
