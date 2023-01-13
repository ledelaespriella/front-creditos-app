import React from 'react'
import { Link } from 'react-router-dom'
import Foot from '../../components/sections/Footer'
import Header from '../../components/sections/Header'

export default function MisProductos() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <Header />
        <div className="d-flex justify-content-center p-4 w-100">
          <div className='d-flex flex-column bg-white h-100 w-75 p-1 rounded-3 shadow-sm'>
            <h1 className='text-primary h1 mt-2 ms-2'>Mis productos</h1>
            <div className='container '>
              <form action="">
                <div className='row'>
                  <div className='col-lg-3 d-flex justify-content-center gap-2 rounded-1 p-1 align-items-end bg-light'>
                    <div>
                      <label htmlFor="productId" className="form-label text-primary mb-0">
                        Numero de producto
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="productId"
                      ></input>
                      {/* <p className="text-danger fs-6 fw-bold mb-0">{errors.name?.message && errors.name?.message}</p> */}
                    </div>
                    <button className='btn btn-primary btn-sm' type='button'>
                      <i class="bi bi-search me-2 "></i>
                    </button>
                  </div>

                  <div className='col-lg-3'>
                    <label htmlFor="desde" className="form-label text-primary mb-0 w-100">
                      Desde
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="desde"
                    ></input>
                    {/* <p className="text-danger fs-6 fw-bold mb-0">{errors.name?.message && errors.name?.message}</p> */}
                  </div>

                  <div className='col-lg-3'>
                    <label htmlFor="hasta" className="form-label text-primary mb-0">
                      Hasta
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="hasta"
                    ></input>
                    {/* <p className="text-danger fs-6 fw-bold mb-0">{errors.name?.message && errors.name?.message}</p> */}
                  </div>

                  <div className='col-lg-3'>
                    <label htmlFor="nombres" className="form-label text-primary mb-0">
                      Ordenar
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nombres"
                    ></input>
                    {/* <p className="text-danger fs-6 fw-bold mb-0">{errors.name?.message && errors.name?.message}</p> */}
                  </div>
                </div>
              </form>
            </div>


            <div className='d-flex flex-column justify-content-center align-items-center mt-3 gap-2 overflow-auto'>
              <div className='w-75 border-top border-bottom'>
                <div className="row h-100 w-100">
                  <div className="col-6 d-flex flex-column">
                    <div className='d-flex gap-4 mb-2'>
                      <p className='text-primary fw-bold mb-0'>
                        Producto N°: <span className='fw-light'>0000000000</span>
                      </p>
                      <p className='text-primary fw-bold mb-0'>
                        Estado: <span className='fw-light fst-italic text-light bg-success badge'>Aprobado</span>
                      </p>
                    </div>
                    <p className='text-primary fw-bold mb-0'>
                      Acreedor:  <span className='fw-light'>John Doe</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda total: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda actual: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-end align-items-end ">
                    <Link className='btn btn-primary btn-sm'>
                      Ver detalles
                    </Link>
                    <p className='text-primary fw-bold fs-6 fst-italic'>
                      Fecha: <span className='fw-light'>07/01/2023</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-75 border-top border-bottom'>
                <div className="row h-100 w-100">
                  <div className="col-6 d-flex flex-column">
                    <div className='d-flex gap-4 mb-2'>
                      <p className='text-primary fw-bold mb-0'>
                        Producto N°: <span className='fw-light'>0000000000</span>
                      </p>
                      <p className='text-primary fw-bold mb-0'>
                        Estado: <span className='fw-light fst-italic text-light bg-success badge'>Aprobado</span>
                      </p>
                    </div>
                    <p className='text-primary fw-bold mb-0'>
                      Acreedor:  <span className='fw-light'>John Doe</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda total: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda actual: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-end align-items-end ">
                    <Link className='btn btn-primary btn-sm'>
                      Ver detalles
                    </Link>
                    <p className='text-primary fw-bold fs-6 fst-italic'>
                      Fecha: <span className='fw-light'>07/01/2023</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-75 border-top border-bottom'>
                <div className="row h-100 w-100 ">
                  <div className="col-6 d-flex flex-column">
                    <div className='d-flex gap-4 mb-2'>
                      <p className='text-primary fw-bold mb-0'>
                        Producto N°: <span className='fw-light'>0000000000</span>
                      </p>
                      <p className='text-primary fw-bold mb-0'>
                        Estado: <span className='fw-light fst-italic text-light bg-warning badge'>En proceso</span>
                      </p>
                    </div>
                    <p className='text-primary fw-bold mb-0'>
                      Acreedor:  <span className='fw-light'>John Doe</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda total: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda actual: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-end align-items-end ">
                    <Link className='btn btn-primary btn-sm'>
                      Ver detalles
                    </Link>
                    <p className='text-primary fw-bold fs-6 fst-italic'>
                      Fecha: <span className='fw-light'>07/01/2023</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-75 border-top border-bottom'>
                <div className="row h-100 w-100">
                  <div className="col-6 d-flex flex-column">
                    <div className='d-flex gap-4 mb-2'>
                      <p className='text-primary fw-bold mb-0'>
                        Producto N°: <span className='fw-light'>0000000000</span>
                      </p>
                      <p className='text-primary fw-bold mb-0'>
                        Estado: <span className='fw-light fst-italic text-light bg-danger badge'>Rechazado</span>
                      </p>
                    </div>
                    <p className='text-primary fw-bold mb-0'>
                      Acreedor:  <span className='fw-light'>John Doe</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda total: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                    <p className='text-primary fw-bold mb-0'>
                      Deuda actual: <span className='fw-light'>$$$$$$$$$</span>
                    </p>
                  </div>
                  <div className="col-6 d-flex flex-column justify-content-end align-items-end ">
                    <Link className='btn btn-primary btn-sm'>
                      Ver detalles
                    </Link>
                    <p className='text-primary fw-bold fs-6 fst-italic'>
                      Fecha: <span className='fw-light'>07/01/2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Foot />
      </div>
    </>)

}
