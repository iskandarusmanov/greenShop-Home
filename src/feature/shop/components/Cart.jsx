import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  reduceQuantity,
  removeItem,
} from "../../../redux/cart.slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex flex-wrap gap-[14px] gap-y-8 mt-14">
        {cartItems?.list.map((item) => (
          <div
            key={item.id}
            className="h-[200px] border-[1px] rounded-md w-[390px] justify-between items-center flex p-4 relative shadow-md"
          >
            <img className="h-[150px]" src={item.img} height={250} alt="" />

            <div>
              <p className="mt-[26px] text-[#3D3D3D]">{item.title}</p>

              <p className="text-[18px] font-bold text-[#46A358]">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="flex gap-5 mt-6 float-end border-[2px] border-[#46A358] w-fit p-2 rounded-md">
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(reduceQuantity(item));
                    }
                  }}
                  className={`${item.quantity === 1 && "text-gray-400"}`}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>

                <p className="text-[#46A358] font-bold text-[18px]">
                  {item.quantity}
                </p>

                <button
                  onClick={() => {
                    dispatch(addQuantity(item));
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(removeItem(item));
              }}
              className="text-red-700 text-[20px] absolute top-1 right-3"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
