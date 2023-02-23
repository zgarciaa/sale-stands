import React, { useState } from "react";
import { updateStand } from "../utils/stands";

interface Props {
  id: number;
  name?: string;
  price?: number;
  numExpositors?: number;
  onClose: () => void;
}

export const UpdateStandForm: React.FC<Props> = ({
  id,
  name,
  price,
  numExpositors,
  onClose,
}) => {
  //const { id, name, price, numExpositors } = stand;
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedNumExpositors, setEditedNumExpositors] = useState(numExpositors);

  const handleSave = async () => {
    try {
      const isUpdated = await updateStand(id, {
        name: editedName ?? null,
        price: editedPrice ?? null,
        numExpositors: editedNumExpositors ?? null,
      });
      console.log(isUpdated);
      onClose();
      return;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edición de Stand</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group my-1">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={editedName}
                  onChange={(event) => setEditedName(event.target.value)}
                />
              </div>
              <div className="form-group my-1">
                <label htmlFor="price">Precio:</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={editedPrice}
                  onChange={(event) =>
                    setEditedPrice(parseInt(event.target.value))
                  }
                />
              </div>
              <div className="form-group my-1">
                <label htmlFor="numExpositors">Capacidad de Expositores:</label>
                <input
                  type="number"
                  className="form-control"
                  id="numExpositors"
                  value={editedNumExpositors}
                  onChange={(event) =>
                    setEditedNumExpositors(parseInt(event.target.value))
                  }
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
