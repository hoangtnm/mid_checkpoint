import React, { useState } from "react";

const useProvideAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const login = () => {
    setUser("admin");
    localStorage.setItem("user", "admin");
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return { user, login, logout };
};

export default useProvideAuth;
