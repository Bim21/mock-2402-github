import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  

  const loginRequest = (token, user) => {
    setToken(token);
    setUserInfo(user);
  };

  const logout = () => {
    setToken(null);
    setUserInfo(null);
  };
// Khai bao GET SET 
// GET la ra doc data
// SET la ghi data 
  return (
    <AuthContext.Provider value={{ token, userInfo, loginRequest, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;