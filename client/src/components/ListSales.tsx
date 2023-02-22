import React, { useState, useEffect } from "react";
import { Sale, getAllSales } from "../utils/sales";

export const ListSales: React.FC = () => {
  const [sales, setSales] = useState<Array<Sale>>();

  const getSales = async () => {
    setSales(await getAllSales());
  };

  useEffect(() => {
    getSales();
  }, [sales]);
  return (
    <>
      <h1 className="text-center my-5">Listado de Ventas</h1>
      {sales?.length != 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th
                colSpan={3}
                className="text-center"
                style={{ backgroundColor: "#8889ED" }}
              >
                Datos del Cliente
              </th>
              <th
                colSpan={2}
                className="text-center"
                style={{ backgroundColor: "#8889ED" }}
              >
                Datos del Stand
              </th>
            </tr>
            <tr>
              <th
                className="text-center"
                style={{ backgroundColor: "rgba(136,137,237,0.6)" }}
              >
                Nombres
              </th>
              <th
                className="text-center"
                style={{ backgroundColor: "rgba(136,137,237,0.6)" }}
              >
                Apellidos
              </th>
              <th
                className="text-center"
                style={{ backgroundColor: "rgba(136,137,237,0.6)" }}
              >
                Documento
              </th>
              <th
                className="text-center"
                style={{ backgroundColor: "rgba(136,137,237,0.6)" }}
              >
                Stand
              </th>
              <th
                className="text-center"
                style={{ backgroundColor: "rgba(136,137,237,0.6)" }}
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale) => (
              <tr key={sale.standId}>
                <td className="p-3">{sale.nameClient}</td>
                <td className="p-3">{sale.lastNameClient}</td>
                <td className="p-3">{sale.documentClient}</td>
                <td className="p-3">{sale.standId}</td>
                <td className="p-3">$ {sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">Aún no se han registrado ventas</div>
      )}
    </>
  );
};