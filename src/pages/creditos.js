import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Creditos = (()=>{
    return <Fragment>
        <h1 className="text-center">En desarrollo</h1>
        <Link className="mb-3 btn btn-primary" to='/usuariofinal/creditos/solicitar'>
            Solicitar credito
        </Link>
        <br />
        <Link className="mt-3 btn btn-primary" to='/usuariofinal/creditos/documentos'>
            Documentos
        </Link>
    </Fragment>
})

export default Creditos