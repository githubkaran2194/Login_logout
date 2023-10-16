import React, { useState } from "react";
import Dashboard from "./Dashboard.1";
import Login from "./Login";
import { Toolbar } from "@material-ui/core";

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };
  return (
    <>
      {isLoggedIn ? (
        <Dashboard isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      ) : (
        <Login onLogin={handleSubmit} />
      )}
    </>
  );
};
export default Routes;
