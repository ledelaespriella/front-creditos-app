import React from 'react';
import Table from 'react-bootstrap/Table'


const HisPagos = (props) => {

    // let admins = require('C:/Users/jmoli/Documents/GitHub/creditos-app/src/historial.json');
    // console.log(admins);


    // const { data } = props;
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
                    {"idpago":"0011","cuota":2, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0021","cuota":3, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0031","cuota":4, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0041","cuota":5, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0051","cuota":6, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0061","cuota":7, "fechapago":"12/01/2021", "valor":"$200000"},
                    {"idpago":"0071","cuota":8, "fechapago":"12/01/2021", "valor":"$200000"}
                ]
            },
            ]
        }
    ]
    let pagosUser = users.products;
    //let newPago= pagosUser[0];

    console.log(users);
    console.log(pagosUser)
    return (
        <>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Id Pago</th>
        <th>Numero Cuota</th>
        <th>Fecha de Pago</th>
        <th>Valor Pagado</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user=>(
      <tr>
        <td>{user.products[0].idproduct}</td>
        <td>{user.products[0].idproduct}</td>
        <td>{user.products[0].idproduct}</td>
        <td>{user.products[0].idproduct}</td>
        <td>{user.products[0].idproduct}</td>
      </tr>))}
    </tbody>
  </Table>
        </>

    );
};

export default HisPagos;