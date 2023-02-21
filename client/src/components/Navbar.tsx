import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Stand App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/stands/Categoria1">
                    Categoría S
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/Categoria2">
                    Categoría K
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/Categoria3">
                    Categoría C
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/Categoria4">
                    Categoría ILV
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/Categoria4">
                    Categoría Bav
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Historial de Ventas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createStand">
                Crear Stand
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mapStands">
                Ver Mapa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registerUser">
                Registro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
