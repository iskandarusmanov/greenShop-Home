import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart.slice";
import { PaginationList } from "../../../../components";

const PlantsList = ({ data }) => {
  const [pagination, setPagination] = useState({
    startLimit: 0,
    endLimit: 9,
    activePage: 1,
  });

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  const handleAddCart = (data) => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
  };

  const handlePaginationChanges = (startLimit, endLimit, activePage) => {
    setPagination({
      startLimit,
      endLimit,
      activePage,
    });
  };

  const limitedPlants = data.slice(pagination.startLimit, pagination.endLimit);

  return (
    <>
      <div className=" w-full mt-[33px] gap-y-[50px] flex gap-[26px] flex-wrap">
        {limitedPlants.map((el) => (
          <div
            key={el.id}
            className="w-[250px] border rounded-md p-2 relative pt-0 shadow-md"
          >
            <img className="h-[250px]" src={el.img} height={250} alt="" />

            <p className="mt-[26px] text-[#3D3D3D]">{el.title}</p>

            <p className="text-[18px] font-bold text-[#46A358]">${el.price}</p>

            <button
              onClick={() => handleAddCart(el)}
              className="absolute bottom-3 text-[18px] right-4 text-[#2e6e3b]"
            >
              {cartItems?.some((item) => item.id === el.id) ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-cart-plus"></i>
              )}
            </button>
          </div>
        ))}
      </div>

      <PaginationList data={data} changePagination={handlePaginationChanges} />
    </>
  );
};

export default PlantsList;
