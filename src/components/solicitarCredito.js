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
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center"> 
                <div className="col-6">
                    <h3>Solicitud Credito Leasing</h3>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center"> 
                <div className="col-4">   
            <form>
                <div className="mb-3">
                    <label for="valorSolicitado" className="form-label">Valor solicitado</label>
                    <div className="row">
                        <div className="col-sm-6">
                        <   input className="form-control" {...register("valorSolicitado")} />
                        <p>{errors.valorSolicitado?.message}</p>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <label for="numeroCuotas" className="form-label">Valor solicitado</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div className="row">
                            <div className="col-sm-6">
                                <select className="form-control" {...register("numeroCuotas")}>
                                <p>{errors.numeroCuotas?.message}</p>
                    <               option value="default" disabled hidden>
                                        Seleccione plazo
                                    </option>
                                    {cuotas.map(cuota=>(
                                    <option value={cuota}>{cuota}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center"> 
                        <div className="col-6">
                            <button className="btn btn-primary form-control justify-content-md-start" type="submit">
                                Solicitar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="col-4">
            <img src="https://unexplicamx.com/wp-content/uploads/2021/05/Solicitud-de-Credito-Formato-Word.jpg" class="img-fluid" class="img-fluid" alt="..."/>
        </div>
        </div>
        </div>
        </>
    )
}

export default SolCredito;
