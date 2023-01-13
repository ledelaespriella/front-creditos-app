import React from 'react';
import Header from '../components/sections/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Imagenes
import CajaSocialLogoSmFormat from '../assets/images/banco-caja-sm-format.png';

const schema = yup.object({
  email: yup.string().email('ingresa un email valido').required('campo obligatorio*')
});

export default function RestorePassword() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <>
      <>
        <div className="d-flex flex-grow-1 flex-column h-100">
          <Header />
          <div className="container-fluid d-flex justify-content-center align-items-center h-100 py-3">
            <div className="container h-100 bg-white">
              <div className="row h-100 shadow-sm">
                <div className="col-12 col-lg-8 h-100 d-flex flex-column justify-content-center align-items-center py-3">
                  <h1 className="text-primary text-center fw-bold w-75"> Olvidé mi contraseña</h1>
                  <p className="text-primary text-center w-50">Ingresa tu correo electrónico, allí te enviaremos las instrucciones para recuperar tu contraseña</p>
                  <form onSubmit={handleSubmit((d) => console.log(d))} className='w-100 d-flex flex-column align-items-center justify-content-center'>
                    <div className='w-75'>
                      <label htmlFor="nombres" className="form-label text-primary mb-0">
                        Correo electronico
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombres"
                        {...register('email')}
                      ></input>
                      <p className="text-danger fs-6 fw-bold mb-0">{errors.email?.message && errors.email?.message}</p>
                    </div>
                    <button className='btn btn-primary my-2' type='submit'>Enviar</button>
                  </form>
                </div>
                <div className="col-12 col-lg-4 d-none bg-primary rounded-end d-lg-flex justify-content-center align-items-center">
                  <img src={CajaSocialLogoSmFormat} alt="" srcset="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div >
      </>
    </>
  )
}
