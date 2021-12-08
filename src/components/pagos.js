import React from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HisPagos = (props) => {

    let users = [
        {
            "names":"luis eduardo",
            "lastNames":"De La Espriella Jimenez",
            "email":"luisdelaespriellaj@hotmail.com",
            "passw":"luis1234",
            "pass2":"luis1234",
            "typeId":"cc",
            "id":1143404408,
            "dateExp":"03/12/2015",
            "incomes":3000000,
            "expenses":1850000,
            "politic":true,
            "products":[{
                "idproduct":"xxxxxxx10",
                "pagos":[
                    {"idpago":"0001","cuota":1, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0011","cuota":2, "fechapago":"12/02/2021", "valor":"$200010"},
                    {"idpago":"0021","cuota":3, "fechapago":"12/03/2021", "valor":"$200020"},
                    {"idpago":"0031","cuota":4, "fechapago":"12/04/2021", "valor":"$200030"},
                    {"idpago":"0041","cuota":5, "fechapago":"12/05/2021", "valor":"$200040"},
                    {"idpago":"0051","cuota":6, "fechapago":"12/06/2021", "valor":"$200050"},
                    {"idpago":"0061","cuota":7, "fechapago":"12/07/2021", "valor":"$200060"},
                    {"idpago":"0071","cuota":8, "fechapago":"12/08/2021", "valor":"$200070"}
                ]
            },
            ]
        }
    ]
    


    console.log(users);
    
    
    return (
        <>
        <Container>
            <div className="row d-flex justify-content-center align-items-center"> 
            <div className="col-8">
            <h3 className="d-flex justify-content-center">Historial de Pagos</h3>
              </div>
              </div>
          <div className="row d-flex justify-content-center align-items-center">

            <div className="col-8">
              
  <Table bordered responsive="sm">
    <thead>
      <tr>
        <th>Id Pago</th>
        <th>Numero Cuota</th>
        <th>Fecha de Pago</th>
        <th>Valor Pagado</th>
      </tr>
    </thead>
    {users.map(user=>(
      <tbody>
      <tr>
        <td>{user.products[0].pagos[0].idpago}</td>
        <td>{user.products[0].pagos[0].cuota}</td>
        <td>{user.products[0].pagos[0].fechapago}</td>
        <td>{user.products[0].pagos[0].valor}</td>
      </tr>
      <tr>
      <td>{user.products[0].pagos[1].idpago}</td>
        <td>{user.products[0].pagos[1].cuota}</td>
        <td>{user.products[0].pagos[1].fechapago}</td>
        <td>{user.products[0].pagos[1].valor}</td>
      </tr>
      <tr>
      <td>{user.products[0].pagos[2].idpago}</td>
        <td>{user.products[0].pagos[2].cuota}</td>
        <td>{user.products[0].pagos[2].fechapago}</td>
        <td>{user.products[0].pagos[2].valor}</td>
      </tr><tr>
      <td>{user.products[0].pagos[3].idpago}</td>
        <td>{user.products[0].pagos[3].cuota}</td>
        <td>{user.products[0].pagos[3].fechapago}</td>
        <td>{user.products[0].pagos[3].valor}</td>
      </tr>
      <tr>
      <td>{user.products[0].pagos[4].idpago}</td>
        <td>{user.products[0].pagos[4].cuota}</td>
        <td>{user.products[0].pagos[4].fechapago}</td>
        <td>{user.products[0].pagos[4].valor}</td>
      </tr>
      <tr>
      <td>{user.products[0].pagos[5].idpago}</td>
        <td>{user.products[0].pagos[5].cuota}</td>
        <td>{user.products[0].pagos[5].fechapago}</td>
        <td>{user.products[0].pagos[5].valor}</td>
      </tr>
      </tbody>))}
    
  </Table>
  </div>
  </div>
  </Container>
        </>

    );
};

export default HisPagos;