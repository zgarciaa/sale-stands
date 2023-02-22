import "../utils/mapStands.css";
import React, { useEffect, useState } from "react";
import { Stand, getStandById } from "../utils/stands";
import { Link } from "react-router-dom";

interface Props {
  standId: number;
  position: {
    x: number;
    y: number;
  };
}

export const DotStand: React.FC<Props> = ({ standId, position }) => {
  const [stand, setStand] = useState<Stand>();

  const getStand = async (standId: number) => {
    setStand(await getStandById(standId));
  };

  useEffect(() => {
    getStand(standId);
  }, [standId]);

  return (
    <div
      className="position-absolute"
      style={{ top: position.y - 15, left: position.x - 150 }}
    >
      {stand?.isAvailable ? (
        <Link
          to={`/formStand/${stand.name}/${stand.price}/${stand.numExpositors}/${stand.id}`}
        >
          <div className="dot green-dot">{standId}</div>
        </Link>
      ) : (
        <div className="dot red-dot">{standId}</div>
      )}
    </div>
  );
};
