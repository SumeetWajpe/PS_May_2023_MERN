import React from "react";
import { useGetAuthenticateUserStatus } from "../../hooks/authHook";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
  let userStatus = useGetAuthenticateUserStatus();

  if (!userStatus) {
    return <Navigate to="/" />;
  }
  return children;
}
