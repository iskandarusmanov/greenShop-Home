import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRoles } from "../../../constants";

const Public = ({ children }) => {
  const user = useSelector((store) => store.user.data);

  if (!user.isAuth || user.user[0]?.role === userRoles.USER) {
    return children;
  } else {
    return <Navigate to={`/${user.user[0]?.role}`} />;
  }
};

export default Public;
