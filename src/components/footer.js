import React from "react";

const Foot = (() => {
    return (
        <>
            <footer class="container-fluid d-flex text-primary" style={{ height: '120px' }}>
                <div className="row w-100">
                    <div className="col-4 d-flex justify-content-center mt-4">
                        <div className=''>
                            <h6 className='mx-auto'>
                                Contacto:
                            </h6>
                            bancocajasocialejemplo@gmailcom:
                            <br />
                            01-8000-XXX-XXX
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-4">
                        <div>
                            <h6>
                                Derechos reservados:
                            </h6>
                            2021 Banco caja social S.A
                        </div>

                    </div>
                    <div className="col-4 d-flex justify-content-center mt-4">
                        <div>
                            <h6>
                                Encuentranos en:
                            </h6>
                            Aca van los iconos
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
})

export default Foot;