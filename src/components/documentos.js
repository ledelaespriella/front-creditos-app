import React from 'react';

const Documentos = () => {
    return (
        <>
        <section className="bg-light">
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Generar Documentos</h1>
                        <form action="/historialpagos">
                        <div class="row">
                            <div class="col-sm-9">
                                <label>Producto</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Seleccione Producto</option>
                                    <option value="1">xxxxxxx10</option>
                                    <option value="2">xxxxxxx20</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-9">
                                <label></label>
                                <button type="submit" className="form-control" >Generar</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="col-sm-6">
                        <img src="https://unexplicamx.com/wp-content/uploads/2021/05/Solicitud-de-Credito-Formato-Word.jpg" class="img-fluid" alt="Responsive image"></img>
                    </div>
                </div>
            </div>
        </section>
        </>
    )}

export default Documentos;