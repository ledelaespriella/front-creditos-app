import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Componentes   
import Header from "../components/sections/Header";

// Imagenes
import CajaSocialLogoSmFormat from '../assets/images/banco-caja-sm-format.png';

//Estilos
import '../assets/custom/Register.css'

const requireMessage = 'campo obligarorio *'
const schema = yup.object({
  //Personales
  name: yup.string().required(requireMessage).min(2),
  lastName: yup.string().required(requireMessage),
  typeId: yup.string().required(requireMessage),
  id: yup.number().typeError('ingrese un valor numerico').required(requireMessage),
  //Finanzas
  dateExp: yup.date().typeError('ingrese un valor de tipo fecha').required(requireMessage),
  dateBirth: yup.date().typeError('ingrese un valor de tipo fecha').required(requireMessage),
  incomes: yup.number().typeError('ingrese un valor numerico').required(requireMessage),
  expenses: yup.number().typeError('ingrese un valor numerico').required(requireMessage),
  //Acceso
  email: yup.string().email('ingresa un correo electronico valido').required(requireMessage),
  password: yup.string().required(requireMessage),
  password2: yup.string().required(requireMessage),
}).required();

const Register = () => {
  const [values, setValues] = React.useState({
    step: 0,
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSteps = async (e) => {
    if (values.step === 0) {
      if (
        !await trigger('name') ||
        !await trigger('lastName') ||
        !await trigger('id') ||
        !await trigger('typeId')
      ) {
        await trigger('name')
        await trigger('lastName')
        await trigger('id')
        await trigger('typeId')
        return;
      } else {
        if (e.target.name === 'next') {
          if (values.step < 2) {
            setValues({
              ...values,
              step: values.step + 1
            })
          }
        } else if (e.target.name === 'prev') {
          if (values.step > 0) {
            setValues({
              ...values,
              step: values.step - 1
            })
          }
        }
      }
    } else if (values.step === 1) {
      if (
        !await trigger('dateExp') ||
        !await trigger('dateBirth') ||
        !await trigger('incomes') ||
        !await trigger('expenses')
      ) {
        await trigger('name')
        await trigger('lastName')
        await trigger('incomes')
        await trigger('expenses')
        return;
      } else {
        if (e.target.name === 'next') {
          if (values.step < 2) {
            setValues({
              ...values,
              step: values.step + 1
            })
          }
        } else if (e.target.name === 'prev') {
          if (values.step > 0) {
            setValues({
              ...values,
              step: values.step - 1
            })
          }
        }
      }
    } else if (values.step === 2) {
      if (
        !await trigger('email') ||
        !await trigger('password')

      ) {
        await trigger('email');
        await trigger('password');
        return;
      } else {
        if (e.target.name === 'next') {
          if (values.step < 2) {
            setValues({
              ...values,
              step: values.step + 1
            })
          }
        } else if (e.target.name === 'prev') {
          if (values.step > 0) {
            setValues({
              ...values,
              step: values.step - 1
            })
          }
        }
      }
    }
  }

    return (
      <>
        <div className="d-flex flex-grow-1 flex-column h-100">
          <Header />
          <div className="container-fluid d-flex justify-content-center align-items-center h-100 py-3">
            <div className="container h-100 bg-white">
              <div className="row h-100 shadow-sm">
                <div className="col-12 col-lg-8 h-100 d-flex flex-column justify-content-center py-3">
                  <h1 className="text-primary text-center fw-bold">Registro</h1>
                  <form onSubmit={handleSubmit((d) => console.log(d))}>
                    <div className="w-100 h-100 flex-column d-flex justify-content-center align-items-center">
                      <div className={(values.step === 0 ? "d-flex" : "d-none ") + " flex-column justify-content-center align-items-center w-100 h-100 overflow-auto"}>
                        <div className="w-75 ">
                          <label htmlFor="nombres" className="form-label text-primary mb-0">
                            Nombres
                          </label>
                          <input
                            {...register("name")}
                            type="text"
                            className="form-control"
                            id="nombres"
                          ></input>
                          <p className="text-danger fs-6 fw-bold mb-0">{errors.name?.message && errors.name?.message}</p>
                        </div>

                        <div className="w-75">
                          <label htmlFor="appelidos" className="form-label text-primary mb-0">
                            Apellidos
                          </label>
                          <input
                            {...register("lastName")}
                            type="text"
                            className="form-control"
                            id="apellidos"
                          ></input>
                          {errors.lastName?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.lastName?.message}</p>}
                        </div>

                        <div className="w-75">
                          <label htmlFor="typeId" className="form-label text-primary mb-0">
                            Tipo de documento
                          </label>
                          <select {...register("typeId")} id="typeId" className="form-select text-primary">
                            <option value="">Seleccione un tipo de documento</option>
                            <option value="cc" className="text-primary">Cedula de ciudadania</option>
                            <option value="pas" className="text-primary">Pasaporte</option>
                            <option value="ce" className="text-primary">Cedula de Estranjeria</option>
                          </select>
                          {errors.typeId?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.typeId?.message}</p>}
                        </div>

                        <div className="w-75">
                          <label htmlFor="id" className="form-label text-primary mb-0">
                            Numero de documento
                          </label>
                          <input
                            {...register("id")}
                            type="number"
                            className="form-control"
                            id="id"
                          ></input>
                          {errors.id?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.id?.message}</p>}
                        </div>
                      </div>

                      <div className={(values.step === 1 ? "d-flex" : "d-none ") + " flex-column justify-content-center align-items-center w-100 h-100 overflow-auto"}>
                        <div className="w-75">
                          <label htmlFor="dateExp" className="form-label text-primary mb-0">
                            Fecha de expedición
                          </label>
                          <input
                            {...register("dateExp")}
                            type="date"
                            className="form-control"
                            id="dateExp"
                          ></input>
                          {errors.dateExp?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.dateExp?.message}</p>}
                        </div>

                        <div className="w-75  ">
                          <label htmlFor="dateBirth" className="form-label text-primary mb-0">
                            Fecha de nacimiento
                          </label>
                          <input
                            {...register("dateBirth")}
                            type="date"
                            className="form-control"
                            id="dateBirth"
                          ></input>
                          {errors.dateExp?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.dateExp?.message}</p>}
                        </div>

                        <div className="w-75">
                          <label htmlFor="incomes" className="form-label text-primary mb-0">
                            Ingresos
                          </label>
                          <input
                            {...register("incomes")}
                            className="form-control mb-0"
                            type={'number'}
                            id="incomes"
                          ></input>
                          {errors.incomes?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.incomes?.message}</p>}
                        </div>

                        <div className="w-75">
                          <label htmlFor="expenses" className="form-label text-primary mb-0">
                            Egresos
                          </label>
                          <input
                            {...register("expenses")}
                            className="form-control mb-0"
                            type={'number'}
                            id="expenses"
                          ></input>
                          {errors.expenses?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.expenses?.message}</p>}
                        </div>
                      </div>

                      <div className={(values.step === 2 ? "d-flex" : "d-none ") + " flex-column justify-content-center align-items-center w-100 h-100 overflow-auto"}>
                        <div className="w-75  ">
                          <label htmlFor="email" className="form-label text-primary mb-0">
                            Email
                          </label>
                          <input
                            {...register("email")}
                            type={'text'}
                            className="form-control"
                            id="email"
                          ></input>
                          {errors.email?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.email?.message}</p>}
                        </div>

                        <div className="w-75">
                          <label htmlFor="password" className="form-label text-primary mb-0">
                            Contraseña
                          </label>
                          <input
                            {...register("password")}
                            type="password"
                            className="form-control"
                            id="password"
                          ></input>
                          {errors.password?.message && <p className="text-danger fs-6 fw-bold mb-0">{errors.password?.message}</p>}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between w-75 mt-3 px-3">


                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          name="prev"
                          onKeyPress={handleSteps}
                        >
                          Anterior
                        </button>


                        < button
                          type={"submit"}
                          className={values.step === 2 ? "d-block btn btn-primary" : "d-none btn btn-primary"}
                        >
                          Enviar
                        </button>

                        <button
                          type={"button"}
                          className={values.step === 2 ? "d-none btn btn-primary" : "d-block btn btn-primary"}
                          name="next"
                          onClick={handleSteps}
                        >
                          Siguiente
                        </button>
                      </div>
                    </div>
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
    );
  };

  export default Register;
