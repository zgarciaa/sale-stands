import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Navbar } from "./components/Navbar";
import { SaleStandForm } from "./components/SaleStandForm";
import { StandsByCategory } from "./components/StandsByCategory";
import { CreateStandForm } from "./components/CreateStandForm";

const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route
      path="/formStand/:name/:price/:numExpositors"
      element={<SaleStandForm />}
    />
    <Route path="/stands/:category" element={<StandsByCategory />} />
    <Route path="/createStand" element={<CreateStandForm />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      {routes}
    </BrowserRouter>
  </React.StrictMode>
);
