import React, { useState } from "react";
import { createNewUser } from "../utils/users";

export const RegisterUserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roleId, setRoleId] = useState("");
  const [document, setDocument] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !lastName || !roleId) {
      alert("Por favor, ingrese todos los campos requeridos.");
      return;
    }
    const newUser = {
      name: name,
      lastName: lastName,
      document: parseInt(document) || null,
      roleId: parseInt(roleId),
    };
    const _newUser = await createNewUser(newUser);

    if (!_newUser) {
      console.log("Se ha generado un error");
      return;
    }
    alert("El Usuario ha sido creado con éxito");
    setName("");
    setLastName("");
    setRoleId("");
  };
  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-5">Registro de Visitante</h1>
        <div className="form-group mt-3">
          <label htmlFor="_name">Nombres:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="_name"
            placeholder="Ingrese Nombres"
            name="_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="lastName"
            placeholder="Ingrese Apellidos"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="document">Documento:</label>
          <input
            type="number"
            className="form-control form-control-lg"
            id="document"
            placeholder="Ingrese el documento (opcional)"
            name="document"
            value={document}
            onChange={(event) => setDocument(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="role" className="mb-1">
            Tipo de Visitante:
          </label>
          <select
            className="form-select form-select-lg form-select-arrow"
            id="role"
            name="role"
            value={roleId}
            onChange={(event) => setRoleId(event.target.value)}
          >
            <option value="" disabled>
              Seleccione Tipo
            </option>
            <option value="3">Trabajador</option>
            <option value="4">Socio</option>
            <option value="5">Prensa</option>
            <option value="6">Cortesia</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="fingerprint">Huella Digital:</label>
          <button
            className="btn btn-dark ms-2"
            onClick={() => alert("Escaneando Huella Dactilar")}
          >
            Escanear Huella Digital
          </button>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Registrar Visitante
          </button>
        </div>
      </form>
    </div>
  );
};
