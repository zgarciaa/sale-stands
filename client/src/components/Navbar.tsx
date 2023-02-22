import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/stands">
          Stand App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/stands"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/stands/S">
                    Categoría S
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/K">
                    Categoría K
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/C">
                    Categoría C
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/ILV">
                    Categoría ILV
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/stands/Bav">
                    Categoría Bav
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sales">
                Historial de Ventas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registerUser">
                Registro
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
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Stand"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
