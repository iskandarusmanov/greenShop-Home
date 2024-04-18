import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import UserBtn from "./components/UserBtn";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.list);
  const navigate = useNavigate();

  return (
    <div className="w-[1200px] sticky top-0 z-50 bg-white border-b h-[53px] m-auto items-center flex justify-between">
      <img
        className="cursor-pointer"
        onClick={() => navigate("/")}
        src="/images/Logo (1).png"
        alt="main_logo"
      />

      <div className={`flex gap-[50px]`}>
        <Link to={routes.HOME}>Home</Link>
        <Link to={routes.SHOP}>Shop</Link>
        <Link to={"/plant-care"}>Plant care</Link>
        <Link to={routes.BLOGS}>Blogs</Link>
      </div>

      <div className="flex items-center gap-7">
        <Link to={routes.SEARCH} className="cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>

        <div className="relative w-fit">
          <Link to={routes.CART} className="cursor-pointer ">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <div className=" absolute w-[18px] h-[18px] rounded-[9px] top-[-10px] right-[-10px] flex items-center justify-center bg-[#46A358]">
            <p className="p-0 text-[14px] font-semibold text-white">
              {cartItems.length}
            </p>
          </div>
        </div>

        <UserBtn />
      </div>
    </div>
  );
}
