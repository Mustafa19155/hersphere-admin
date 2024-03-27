import React, { useState } from "react";
import UseLocalStorage, { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setuser] = useLocalStorage("user", null);

  const value = {
    user,
    setuser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
