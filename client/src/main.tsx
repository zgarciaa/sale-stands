import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Navbar } from "./components/Navbar";
import { SaleForm } from "./components/SaleForm";
import { StandsByCategory } from "./components/StandsByCategory";

const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route
      path="/formStand/:name/:price/:numExpositors"
      element={<SaleForm />}
    />
    <Route path="/stands/:category" element={<StandsByCategory />} />
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
