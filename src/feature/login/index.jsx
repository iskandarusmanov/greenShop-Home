import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Input, Loader } from "../../components";
import { routes } from "../../constants/routes";
import { fetchUser } from "../../services/userServices";
import { isLogged } from "../../redux/user.slice";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.data.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { username, password } = value;

    setLoading(true);

    fetchUser(username, password)
      .then((res) => {
        if (res.length == 1) {
          dispatch(isLogged(res));
          const role = res[0].role;
          {
            role === "user" ? navigate(routes.HOME) : navigate(`/${role}`);
          }
        } else {
          toast.error("Username or password is error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-fit mt-[100px] m-auto py-[50px] relative h-auto shadow-lg flex items-center px-[50px]">
      <div>
        <p className="text-[30px] text-[#46A358] text-center font-bold">
          LOGIN
        </p>

        <Link
          to={routes.REGISTER}
          className="text-[18px] font-semibold text-blue-700"
        >
          Register
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-[20px]">
          <p className="font-semibold text-gray-700">Username *</p>

          <Input
            type="text"
            name="username"
            placeholder="Username"
            {...register("username", {
              required: "this field is required",
            })}
            className={`${errors.username?.message && "border-red-500"}`}
          />

          <ErrorMessage error={errors?.username?.message} />

          <p className="font-semibold text-gray-700 mt-3">Password *</p>

          <div className="w-fit relative">
            <Input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "this field is required",
              })}
              className={`${errors.password?.message && "border-red-500"}`}
            />

            <button
              className="absolute top-[13px] text-gray-600 right-2"
              onClick={() => setShowPassword((prev) => !prev)}
              type="button"
            >
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>

          <ErrorMessage error={errors?.password?.message} />

          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              fontSize: "18px",
              marginTop: "40px",
              bgcolor: "#46A358",
            }}
          >
            {loading ? <Loader className={"w-[30px] h-[30px]"} /> : "Login"}
          </Button>
        </form>
      </div>

      <div className=" absolute top-4 left-2">
        <Button
          variant="text"
          sx={{
            fontSize: "20px",
            color: "black",
          }}
          onClick={() => navigate(routes.HOME)}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Button>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginPage;

const ErrorMessage = ({ error }) => {
  return <div className="text-[red]">{error}</div>;
};
