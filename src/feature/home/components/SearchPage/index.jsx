import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plants } from "../../../../data/mockData";
import { addToCart } from "../../../../redux/cart.slice";

export default function SearchPage() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.list);

  useEffect(() => {
    setData(plants);
  }, []);

  const handleSearchChange = (value) => {
    const res = plants.filter((plant) =>
      plant.title.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
  };

  const handleAddCart = (data) => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="w-[520px] m-auto">
        <input
          onChange={(e) => handleSearchChange(e.target.value)}
          className=" w-full font-medium text-[18px] text-[#3D3D3D] border-[2px] border-gray-400 p-[16px] h-[48px] rounded-[8px] mt-[50px] focus:border-[#46A358] outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>

      {data.length == 0 && (
        <div className="w-fit m-auto mt-[200px]">
          <p className="text-[30px]">Bunday mahsulot topilmadi</p>
        </div>
      )}

      <div className=" w-full mt-[60px] px-[39px] gap-y-[50px] flex gap-[40px] flex-wrap">
        {data.map((el) => (
          <div
            key={el.id}
            className="w-[250px] border rounded-md relative p-2 pt-0 shadow-md"
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
    </>
  );
}
