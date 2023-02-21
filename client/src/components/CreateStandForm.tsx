import React, { useState } from "react";
import { createNewStand } from "../utils/stands";

export const CreateStandForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [numExpositors, setNumExpositors] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !price || !numExpositors || !category) {
      alert("Por favor, ingrese todos los campos requeridos.");
      return;
    }
    const newStand = {
      name: name,
      price: price,
      numExpositors: numExpositors,
      category: category,
    };
    await createNewStand(newStand);
    alert("El stand ha sido creado con éxito");
    setName("");
    setPrice(null);
    setNumExpositors(null);
    setCategory("");
  };
  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mt-5">Creación de Stand</h1>
        <div className="form-group mt-3">
          <label htmlFor="_name">Nombre:</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="_name"
            placeholder="Ingrese el nombre"
            name="_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="value">Valor:</label>
          <input
            type="number"
            className="form-control form-control-lg"
            id="value"
            placeholder="Ingrese el valor"
            name="value"
            value={price ? price : ""}
            onChange={(event) => setPrice(parseInt(event.target.value))}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="numExpositors">Número de Expositores:</label>
          <input
            type="number"
            className="form-control form-control-lg"
            id="numExpositors"
            placeholder="Ingrese el número de expositores"
            name="numExpositors"
            value={numExpositors ? numExpositors : ""}
            onChange={(event) => setNumExpositors(parseInt(event.target.value))}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="category" className="mb-1">
            Categoria del Stand:
          </label>
          <select
            className="form-select form-select-lg form-select-arrow"
            id="category"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Seleccione una Categoría
            </option>
            <option value="Categoria1">Categoria1</option>
            <option value="Categoria2">Categoria2</option>
            <option value="Categoria3">Categoria3</option>
            <option value="Categoria4">Categoria4</option>
          </select>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Crear Nuevo Stand
          </button>
        </div>
      </form>
    </div>
  );
};
