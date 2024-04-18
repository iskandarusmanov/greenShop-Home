import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../../../constants/routes";
import { userRoles } from "../../../constants";

const Private = ({ children }) => {
  const user = useSelector((store) => store.user.data);

  if (user.isAuth && user.user[0]?.role === userRoles.ADMIN) {
    return children;
  } else {
    return <Navigate to={routes.HOME} />;
  }
};

export default Private;
