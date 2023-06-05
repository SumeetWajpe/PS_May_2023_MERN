import React, { createContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useNavigate } from "react-router-dom";
import { useGetAuthenticateUserStatus } from "../hooks/authHook";

const AuthContext = createContext({ isLoggedIn: true });

export default function AuthProvider({ children }: any) {
  // let userState: any = useSelector<RootState>(store => store.login);

  // OR
  // state
  // OR
  let userStatus = useGetAuthenticateUserStatus();
  return (
    <AuthContext.Provider value={{ isLoggedIn: userStatus || false }}>
      {children}
    </AuthContext.Provider>
  );
}
