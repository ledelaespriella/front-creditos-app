import React from "react";

const generarCertificado = () => {
  return (
    <>
      <section className="bg-light">
        <div className="container">
          <div class="row">
            <div class="col-sm-6">
              <h1>Generar certificados</h1>
              <div class="row">
                <div class="col-sm-9">
                  <label>Producto</label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-9">
                  <label></label>
                  <button type="button" className="form-control">
                    Generar
                  </button>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <img
                src="https://unexplicamx.com/wp-content/uploads/2021/05/Solicitud-de-Credito-Formato-Word.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default generarCertificado;
