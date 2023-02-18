import React from "react";
import { Stand } from "../utils/stands";
import { StandCard } from "./StandCard";

interface Props {
  stands: Array<Stand>;
}

export const ListStands: React.FC<Props> = ({ stands }) => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {stands.map((stand) => (
          <StandCard key={stand.id} stand={stand} />
        ))}
      </div>
    </div>
  );
};
