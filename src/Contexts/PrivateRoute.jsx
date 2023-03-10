import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./UserAuth";

export const PrivateRoute = ({ children }) => {
  const { userDetails } = React.useContext(AuthContext);
  if (userDetails.name !== "") return children;
  return <Navigate to="/customer/account/login" />;
};
