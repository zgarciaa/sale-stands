import React, { useState, useEffect } from "react";
import { ListStands } from "./components/ListStands";
import { Stand, getAllStands } from "./utils/stands";

export function App() {
  const [stands, setStands] = useState<Array<Stand>>([]);

  const getStands = async () => {
    setStands(await getAllStands());
  };

  useEffect(() => {
    getStands();
  }, [stands]);

  return (
    <>
      <h1 className="text-center mt-5">Lista de Stands</h1>
      <ListStands stands={stands} />
    </>
  );
}
