import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stand } from "../utils/stands";

interface Props {
  stand: Stand;
}

export const StandCard: React.FC<Props> = ({ stand }) => {
  const { id, isAvailable } = stand;
  //const { id, name, price, numExpositors, isAvailable } = stand;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(stand.name);
  const [price, setPrice] = useState(stand.price);
  const [numExpositors, setNumExpositors] = useState(stand.numExpositors);

  return (
    <>
      <div className="card mb-3 mx-3 my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <p className="card-text">Capacidad: {numExpositors}</p>
          <div className="d-flex justify-content-around">
            {isAvailable ? (
              <Link to={`/formStand/${name}/${price}/${numExpositors}/${id}`}>
                <button className="btn btn-primary">Venta</button>
              </Link>
            ) : (
              <button className="btn btn-secondary" disabled>
                Vendido
              </button>
            )}
            <button className="btn btn-dark">Editar</button>
          </div>
        </div>
      </div>
    </>
  );
};
