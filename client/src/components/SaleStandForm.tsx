import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createNewSale, createNewClientStand } from "../utils/sales";

export const SaleStandForm: React.FC = () => {
  const navigate = useNavigate();
  const [nameClient, setNameClient] = useState("");
  const [lastNameClient, setlastNameClient] = useState("");
  const [documentClient, setDocumentClient] = useState("");
  const [addressClient, setAddressClient] = useState("");
  const [phoneNumberClient, setPhoneNumberClient] = useState("");
  const [emailClient, setEmailClient] = useState("");

  const { standId, name, price, numExpositors } = useParams();
  const formattedPrice = price
    ? parseInt(price).toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      })
    : "";
  const _numExpositors = numExpositors ? parseInt(numExpositors) : 1;
  const _standId = standId ? parseInt(standId) : 1;
  const _price = price ? parseInt(price) : 100000;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nameClient || !lastNameClient || !documentClient || !addressClient) {
      alert("Por favor, ingrese todos los campos requeridos.");
      return;
    }
    const newSale = {
      standId: _standId,
      documentClient: parseInt(documentClient),
      nameClient: nameClient,
      lastNameClient: lastNameClient,
      price: _price,
    };
    const _newSale = await createNewSale(newSale);
    console.log(newSale);
    if (!_newSale) {
      console.log("Se ha generado un error");
      return;
    }

    const newClientStand = {
      standId: _standId,
      documentClient: parseInt(documentClient),
      nameClient: nameClient,
      lastNameClient: lastNameClient,
      addressClient: addressClient,
      phoneNumberClient: parseInt(phoneNumberClient),
      emailClient: emailClient,
    };
    const _newClientStand = await createNewClientStand(newClientStand);
    if (!_newClientStand) {
      console.log("Se ha generado un error");
      return;
    }
    alert("La Venta ha sido realizada con éxito");
    setNameClient("");
    setlastNameClient("");
    setDocumentClient("");
    setAddressClient("");
    navigate("/stands");
  };
  const scanFingerprint = () => {
    alert("Escaneando Huella Dactilar");
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
        <h5>Precio del Stand: {formattedPrice}</h5>
        <h5>Capacidad {_numExpositors}</h5>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Datos del Cliente</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="nombre">Nombres:</label>
              <input
                type="text"
                className="form-control"
                id="_name"
                placeholder="Ingrese Nombres"
                name="nombre"
                value={nameClient}
                onChange={(event) => setNameClient(event.target.value)}
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
                value={lastNameClient}
                onChange={(event) => setlastNameClient(event.target.value)}
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
                value={documentClient}
                onChange={(event) => setDocumentClient(event.target.value)}
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
                value={addressClient}
                onChange={(event) => setAddressClient(event.target.value)}
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
                value={phoneNumberClient}
                onChange={(event) => setPhoneNumberClient(event.target.value)}
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
                value={emailClient}
                onChange={(event) => setEmailClient(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Huella Digital:</label>
              <button className="btn btn-dark ms-2" onClick={scanFingerprint}>
                Escanear Huella Digital
              </button>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Imprimir Factura
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3 className="text-center">Datos de los Expositores</h3>
          {expositorsInputs}
        </div>
      </div>
    </div>
  );
};
