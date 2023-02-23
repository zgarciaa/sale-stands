import React, { useState, useEffect } from "react";
import { Sale, getAllSales } from "../utils/sales";

export const ListSales: React.FC = () => {
  const [sales, setSales] = useState<Array<Sale>>();

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    });
  };

  const formatDocument = (document: number) => {
    return document.toLocaleString("es-CO", {
      style: "decimal",
      useGrouping: true,
    });
  };

  const getSales = async () => {
    setSales(await getAllSales());
  };

  useEffect(() => {
    getSales();
  }, [sales]);

  return (
    <>
      <h1 className="text-center p-2 my-4">Listado de Ventas</h1>
      <div className="container">
        <div className="row">
          <div className="col">
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
                      <td className="p-3">
                        {formatDocument(sale.documentClient)}
                      </td>
                      <td className="p-3">{sale.standId}</td>
                      <td className="p-3">{formatPrice(sale.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center">Aún no se han registrado ventas</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
