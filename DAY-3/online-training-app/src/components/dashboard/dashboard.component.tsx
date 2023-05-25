import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.component";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
