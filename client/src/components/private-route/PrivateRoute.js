import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "../loading-to-redirect/LoadingToRedirect.js";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => ({ ...state.auth.user }));
  return user ? children : <LoadingToRedirect />;
};

export default PrivateRoute;