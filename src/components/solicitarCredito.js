import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const SolCredito = () => {

    const schema = yup.object({
        valorSolicitado: yup.number().typeError('Se espera un valor numerico').required('Valor requerido'),
        numeroCuotas: yup.number().positive().integer().required('Debe seleccionar numero de cuotas'),
      }).required();

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    let cuotas = [];
    for (let i = 1; i<=60; i++){
        cuotas.push(i);
    }
    console.log(cuotas);



    return (
        <>
        <div className="mb-3">
        <label for="valorSolicitado" className="form-label">Valor solicitado</label>
        <input {...register("valorSolicitado")} />
        <p>{errors.valorSolicitado?.message}</p>
        </div>
        <div class="mb-3">
        <label for="numeroCuotas" className="form-label">Valor solicitado</label>
        <select {...register("numeroCuotas")}>
                    <p>{errors.numeroCuotas?.message}</p>
                    <option value="default" disabled hidden>
                        Seleccione plazo
                    </option>
                        {cuotas.map(cuota=>(
                            <option value={cuota}>{cuota}</option>
                        ))}
        </select>
        </div>
        {/* <aside className="container jutify-content: center">
        <div className="py-5 text-center">
            <h2>Solicitud de credito leasing</h2>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid">
        <div className="row">
            <div className="col-6 justify-content-start">
            <div className="col-sm-6">
                <label for="valorSolicitado" className="form-label">Valor solicitado</label>
            </div>
            </div>
            <div className="row 12">
                <div className="col-sm-6">
                    <input {...register("valorSolicitado")} />
                    <p>{errors.valorSolicitado?.message}</p>
                </div>
            </div>
            <div className="row 12">
                <div className="col-sm-6">
                    <label for="numeroCuotas" className="form-label">Valor solicitado</label>
                </div>
            </div>
            <div className="row 12">
                <div className="col-sm-6">
                    <select {...register("numeroCuotas")}>
                    <p>{errors.numeroCuotas?.message}</p>
                    <option value="default" disabled hidden>
                        Seleccione plazo
                    </option>
                        {cuotas.map(cuota=>(
                            <option value={cuota}>{cuota}</option>
                        ))}
                        {/* <option value={cuotas.map}>{cuotas.map}</option> */}
                        
                    {/* </select>
                </div>
            </div>
            <div className="row 12">
                <div className="col-sm-6">
                    <button className="btn btn-primary" type="submit">
                    Solicitar
                    </button>
                </div>
            </div>
            </div>
            
            </div>
        </form>
        <div className="col-6 justify-content-end">
            <img
            className="ms-4 my-1"
            src="http://localhost:3000/caja-social-logo.png"
            alt=""
            style={{ height: "70px", width: "auto" }}
          />
            </div>
        </aside> */} 
        </>
    )
}

export default SolCredito;
