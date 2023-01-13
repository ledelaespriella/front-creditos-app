import React from 'react';

const Users = (props) => {

  const { data } = props;

  return (
    <>
      <table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th className="col-2" scope="col">#</th>
            <th className="col" scope="col">Nombres</th>
            <th className="col" scope="col">Apellidos</th>
            <th className="col" scope="col">Correos</th>
            <th className="col" scope="col">Tipo ID</th>
            <th className="col" scope="col">Id</th>
            <th className="col" scope="col">Fecha de expedición</th>
            <th className="col" scope="col">Ingresos</th>
            <th className="col" scope="col">Egresos</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{user.names}</td>
                  <td>{user.lastNames}</td>
                  <td>{user.email}</td>
                  <td>{user.typeId}</td>
                  <td>{user.id}</td>
                  <td>{user.dateExp}</td>
                  <td>{user.incomes}</td>
                  <td>{user.expenses}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

    </>

  );
};

export default Users;