import React from "react";
import { useParams } from "react-router-dom";

export const SaleForm: React.FC = () => {
  const { name, price, numExpositors } = useParams();
  const _price = price
    ? parseInt(price).toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      })
    : "";
  const _numExpositors = numExpositors ? parseInt(numExpositors) : 1;

  const scanFingerprint = () => {
    window.alert("Escaneando huella dactilar");
  };
  // Generar una matriz de elementos JSX para los inputs de los expositores
  const expositorsInputs = Array.from(
    { length: _numExpositors },
    (_, index) => (
      <div key={index}>
        <h4>Expositor {index + 1}</h4>
        <div className="form-group my-3">
          <label htmlFor={`nombre${index}`}>Nombre:</label>
          <input
            type="text"
            className="form-control"
            id={`nombre${index}`}
            placeholder="Ingrese nombres"
            name={`nombre${index}`}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor={`apellido${index}`}>Apellido:</label>
          <input
            type="text"
            className="form-control"
            id={`apellido${index}`}
            placeholder="Ingrese apellidos"
            name={`apellido${index}`}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor={`documento${index}`}>Documento:</label>
          <input
            type="number"
            className="form-control"
            id={`documento${index}`}
            placeholder="Ingrese el documento"
            name={`documento${index}`}
          />
        </div>
      </div>
    )
  );

  return (
    <div className="container my-5">
      <h1 className="text-center">Venta de Stand</h1>
      <div className="text-center my-4">
        <h5>Stand: {name}</h5>
        <h5>Precio del Stand: {_price}</h5>
        <h5>Capacidad {_numExpositors}</h5>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Datos del Cliente</h3>
          <form id="formUserRegister">
            <div className="form-group mt-3">
              <label htmlFor="nombre">Nombres:</label>
              <input
                type="text"
                className="form-control"
                id="_name"
                placeholder="Ingrese Nombres"
                name="nombre"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="apellido">Apellidos:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Ingrese Apellidos"
                name="apellido"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="documento">Documento:</label>
              <input
                type="number"
                className="form-control"
                id="_document"
                placeholder="Ingrese el documento"
                name="documento"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Ingrese la dirección"
                name="address"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Ingrese teléfono"
                name="phone"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese correo electrónico"
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Huella Digital:</label>
              <button className="btn btn-dark ms-2" onClick={scanFingerprint}>
                Escanear Huella Digital
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Datos de los Expositores</h3>
          {expositorsInputs}
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Imprimir Factura
          </button>
        </div>
      </div>
    </div>
  );
};
