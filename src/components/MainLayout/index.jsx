import React from "react";
import Header from "../Header/index.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />

      <div className="w-[1200px] m-auto">
        <Outlet />
      </div>
    </div>
  );
}
