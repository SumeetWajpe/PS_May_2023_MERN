import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/header.component";
import { useGetAuthenticateUserStatus } from "../../hooks/authHook";
import { JsxElement } from "typescript";

export default function Dashboard() {
  let isLoggedIn: boolean = useGetAuthenticateUserStatus();

  if (isLoggedIn == true) {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  } else {
    <Navigate to="/" />;
  }
}
