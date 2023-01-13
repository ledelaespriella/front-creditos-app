import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Usuarios = () => {
  return (
    <Fragment>
      <div>
        <Link to="/final">Usuario final</Link>
      </div>
      <div>
        <Link to="/inter">Usuario interno</Link>
      </div>
      <div>
        <Link to="/admin">Usuario administrativo</Link>
      </div>
    </Fragment>
  );
};

export default Usuarios;
