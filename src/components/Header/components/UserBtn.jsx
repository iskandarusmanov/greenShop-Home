import { Logout } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../../../constants/routes";
import { logOut } from "../../../redux/user.slice";
import { useNavigate } from "react-router-dom";

const UserBtn = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate(routes.HOME)
  };

  return (
    <div>
      {user.isAuth ? (
        <div className=" flex gap-4 p-2">
          <button onClick={handleLogOut}>
            <Logout />
          </button>

          <div className="w-[40px] h-[40px] text-[26px] text-white font-semibold rounded-[20px] flex cursor-pointer items-center justify-center bg-[#46A358]">
            {user.user[0]?.username[0].toUpperCase()}
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate(routes.LOGIN)}
          className="w-[80px] h-[35px] text-white font-medium rounded-[4px] bg-[#46A358]"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserBtn;
