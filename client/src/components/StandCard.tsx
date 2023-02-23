import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stand } from "../utils/stands";
import imageUrl1 from "../../../stands/stand1.jpg";
import imageUrl2 from "../../../stands/stand2.jpg";

interface Props {
  stand: Stand;
}

export const StandCard: React.FC<Props> = ({ stand }) => {
  const { id, isAvailable } = stand;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(stand.name);
  const [price, setPrice] = useState(stand.price);
  const [numExpositors, setNumExpositors] = useState(stand.numExpositors);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([imageUrl1, imageUrl2]);

  const handleSetIsExpanded = (expanded: boolean) => {
    setIsExpanded(expanded);
    if (expanded) {
      setCurrentImageIndex(0);
    }
  };

  return (
    <>
      <div
        className="card mb-3 mx-3 my-3"
        style={{ width: "18rem", position: "relative" }}
      >
        <img
          src={images[0]}
          className="card-img-top"
          alt={`Imagen de ${name}`}
          onClick={() => handleSetIsExpanded(true)}
          style={{ cursor: "pointer" }}
        />
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
            <button className="btn btn-dark" onClick={() => setIsEditing(true)}>
              Editar
            </button>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Imagen de ${name}`}
            style={{ maxWidth: "80vw", maxHeight: "80vh" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <button
              className="btn btn-light"
              style={{ marginRight: "1rem" }}
              disabled={currentImageIndex === 0}
              onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
            >
              {"<"}
            </button>
            <button
              className="btn btn-light"
              disabled={currentImageIndex === images.length - 1}
              onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
            >
              {">"}
            </button>
            <button
              className="btn btn-light"
              onClick={() => handleSetIsExpanded(false)}
            >
              {"x"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
