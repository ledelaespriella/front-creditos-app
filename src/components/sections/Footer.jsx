import React from "react";

const Foot = (() => {
  return (
    <>
      <footer className="container-fluid text-primary p-4 bg-white border">
        <div className='d-flex justify-content-center'>
          <div className="row w-100">
            <div className="col-4 container-fluid col-md-3 d-flex justify-content-center mt-4">
              <div>
                <h6 className='text-break'>
                  Contacto:
                </h6>
                <span className='text-break'>
                  bancocajasocialejemplo@gmail.com
                  <br />
                  01-8000-XXX-XXX
                </span>

              </div>
            </div>
            <div className="col-4 container-fluid col-md-3 d-flex justify-content-center mt-4">
              <div>
                <h6 className='text-break'>
                  Derechos reservados:
                </h6>
                <span className='text-break'>
                  2021 Banco caja social S.A
                </span>
              </div>

            </div>
            <div className="col-4 container-fluid col-md-3 d-flex justify-content-center mt-4">
              <div>
                <h6 className='text-break'>
                  Encuentranos en:
                </h6>
                <span className='text-break'>
                  Aca van los iconos
                </span>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
})

export default Foot;