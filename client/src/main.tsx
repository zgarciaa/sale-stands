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
import { MapStands } from "./components/MapStands";
import { Login } from "./components/Login";
import { RegisterUserForm } from "./components/RegisterUserForm";
import { ListSales } from "./components/ListSales";

const routes = (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/stands" element={<App />} />
    <Route
      path="/formStand/:name/:price/:numExpositors/:standId"
      element={<SaleStandForm />}
    />
    <Route path="/createStand" element={<CreateStandForm />} />
    <Route path="/registerUser" element={<RegisterUserForm />} />
    <Route path="/stands/:category" element={<StandsByCategory />} />
    <Route path="/mapStands" element={<MapStands />} />
    <Route path="/sales" element={<ListSales />} />
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
