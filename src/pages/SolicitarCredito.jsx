import React from "react";

const solicitarCredito = () => {

  return <>
    <section className="bg-light">
      <div className="container">


        <div class="row">

          <div class="col-6">
            <h1>Solicitar crédito</h1>
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

              <div class="col-sm-6 mt-3">

                <button type="button" className="form-control" >Generar</button>
              </div>

            </div>



          </div>

          <div class="col-6">
            <img src="https://gestion.pe/resizer/ml7IA6qY1GXWPUZzukZe7mIohAM=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5FDOFYHKIFDMLBVARLRMUBLPPI.jpg" class="img-fluid" alt="Responsive image"></img>
          </div>

        </div>

      </div>
    </section>
  </>

};

export default solicitarCredito;

