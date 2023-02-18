import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stand, getStandsByCategory } from "../utils/stands";
import { StandCard } from "./StandCard";

interface Props {
  category: Stand["category"];
}

export const StandsByCategory: React.FC = () => {
  const { category } = useParams();
  const [stands, setStands] = useState<Array<Stand>>([]);
  const _category = category ? category : "Categoria1";

  const getStands = async () => {
    setStands(await getStandsByCategory(_category));
  };

  useEffect(() => {
    getStands();
  }, [_category]);

  return (
    <>
      <h1 className="text-center mt-5">Lista de Stands</h1>
      <h3 className="text-center mt-2">Categoria: {_category}</h3>
      <div className="container">
        <div className="d-flex flex-wrap">
          {stands.map((stand) => (
            <StandCard key={stand.id} stand={stand} />
          ))}
        </div>
      </div>
    </>
  );
};
