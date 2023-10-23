import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      setIsLoggedIn(true);
    }
  }, []);

  const onLoginHandler = (username, password) => {
    localStorage.setItem("isLogin", "1");
    setIsLoggedIn(true);
  };

  const onLogoutHandler = (e) => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
