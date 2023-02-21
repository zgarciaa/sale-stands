import React, { useState } from "react";
import { createNewUser } from "../utils/users";

export const RegisterUserForm: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roleId, setRoleId] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !lastName || !roleId) {
      alert("Por favor, ingrese todos los campos requeridos.");
      return;
    }
    const newUser = {
      name: name,
      lastName: lastName,
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
        <h1 className="text-center mt-5">Creación de Usuario</h1>
        <div className="form-group mt-3">
          <label htmlFor="_name">Nombres:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="_name"
            placeholder="Ingrese nombres"
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
          <label htmlFor="role" className="mb-1">
            Rol del Usuario:
          </label>
          <select
            className="form-select form-select-lg form-select-arrow"
            id="role"
            name="role"
            value={roleId}
            onChange={(event) => setRoleId(event.target.value)}
          >
            <option value="" disabled>
              Seleccione un Rol
            </option>
            <option value="1">Cliente Stand</option>
            <option value="2">Expositor</option>
            <option value="3">Trabajador</option>
            <option value="4">Socio</option>
            <option value="5">Prensa</option>
            <option value="6">Cortesia</option>
          </select>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Registrar Nuevo Usuario
          </button>
        </div>
      </form>
    </div>
  );
};
