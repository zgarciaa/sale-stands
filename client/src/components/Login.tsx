import React, { useState } from "react";
import { loginOperator } from "../utils/operators";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Por favor, ingrese todos los campos requeridos.");
      return;
    }
    const operator = {
      username: username,
      password: password,
    };
    const isLogin = await loginOperator(operator);
    if (!isLogin) {
      alert("Usuario no existe");
      return;
    }
    alert("Inicio de Sesión exitoso");
    navigate("/stands");
  };
  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-5">Inicio de Sesión</h1>
        <div className="form-group mt-3">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="username"
            placeholder="Ingrese usuario"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="value">Contraseña:</label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="value"
            placeholder="Ingrese contraseña"
            name="value"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};
