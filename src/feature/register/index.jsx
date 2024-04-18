import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../components";
import { routes } from "../../constants/routes";
import { userRoles } from "../../constants";
import { addUser, fetchUser } from "../../services/userServices";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { fullName, username, password, role } = value;

    const data = {
      id: Date.now(),
      fullName,
      username,
      password,
      role,
    };

    fetchUser(username, password).then((res) => {
      if (res.length == 1) {
        toast.error("Username or password is invalid");
      } else {
        addUser(data)
          .then((res) => {
            navigate(routes.LOGIN);
          })
          .catch((res) => {
            toast.error("Something is error");
          });
      }
    });
  };

  return (
    <div className="w-fit relative  m-auto mt-[50px] py-[50px] shadow-lg flex items-center px-[50px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-[30px] text-center text-[#46A358] font-bold">
          Register
        </p>
        <Link
          to={routes.LOGIN}
          className="text-[18px] font-semibold text-blue-700"
        >
          Login
        </Link>
        <div className="mt-[20px]">
          <p className="font-semibold text-gray-700">Full name *</p>
          <Input
            type="text"
            name="fullName"
            placeholder="Full name"
            {...register("fullName", {
              required: "this field is required",
            })}
            className={`${errors.fullName?.message && "border-red-500"}`}
          />
          <ErrorMessage error={errors?.fullName?.message} />

          <p className="font-semibold text-gray-700 mt-3">Username *</p>
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
              className="absolute top-[13px] right-2 text-gray-600"
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

          <p className="font-semibold text-gray-700 mt-3">Role of user *</p>
          <select
            name="role"
            className="block appearance-none w-full h-[40px] mt-[5px] bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded-[6px] leading-tight focus:outline-none focus:border-[#46A358] focus:shadow-md"
            {...register("role", {
              required: "this field is selected",
            })}
          >
            <option value="" hidden>
              Select a role
            </option>

            {Object.values(userRoles).map((el, i) => (
              <option key={i} value={el}>
                {el.toUpperCase(1)}
              </option>
            ))}
          </select>
          <ErrorMessage error={errors?.role?.message} />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              fontSize: "18px",
              marginTop: "40px",
              bgcolor: "#46A358",
            }}
          >
            Register
          </Button>
        </div>
      </form>

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

export default RegisterPage;

const ErrorMessage = ({ error }) => {
  return <div className="text-[red]">{error}</div>;
};
