import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Usuarios = () => {
  return (
    <Fragment>
      <div>
        <Link to="/usuariofinal">Usuario final</Link>
      </div>
      <div>
        <Link to="/adminUI">Usuario interno</Link>
      </div>
      <div>
        <Link to="/admin">Usuario administrativo</Link>
      </div>
    </Fragment>
  );
};

export default Usuarios;
