import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const NavFinal = (()=>{
    return <Fragment>
        <div className="col-4 d-flex justify-content-center">
            <Link to='/creditos/prorroga' className="btn btn-primary">
                Solicitar prorroga
            </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
            <Link to='/creditos' className="btn btn-primary">
                Creditos
            </Link>
        </div>
        <div className="col-4 d-flex justify-content-center">
            <Link to='/creditos/certificado' className="btn btn-primary">
                Solicitar Certificado
            </Link>
        </div>
    </Fragment>
})

export default NavFinal;