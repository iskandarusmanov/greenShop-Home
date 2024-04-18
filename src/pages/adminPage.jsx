import { Button } from "@mui/material";
import React from "react";
import { logOut } from "../redux/user.slice";
import { useDispatch } from "react-redux";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate(routes.HOME)
  }

  return (
    <div>
      AdminPage
      <Button variant="contained" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};

export default AdminPage;
