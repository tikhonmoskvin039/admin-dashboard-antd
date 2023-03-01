import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customers/Customers";
import DashBoard from "../../pages/DashBoard/DashBoard";
import Inventory from "../../pages/Inventory/Inventory";
import Orders from "../../pages/Orders/Orders";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="*" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
