import React, { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { plants } from "../../../../data/mockData";
import { plantSizes } from "../../../../constants";

export default function PlantsFilter({ data, changeResult }) {
  const [result, setResult] = useState(plants);
  const [rangeValue, setRangeValue] = useState([30, 150]);
  const [isActive, setIsActive] = useState({
    category: null,
    size: null,
  });

  const categoriesList = useMemo(
    () => [
      ...new Set(
        plants.map((el) => el.category.split("|").map((el) => el.trim())).flat()
      ),
    ],
    [plants]
  );

  const handleCategory = (val) => {
    setIsActive({
      ...data,
      category: val,
    });
    const res = plants.filter((plant) => plant.category.includes(val));
    setResult(res);
  };

  const handleSize = (val) => {
    setIsActive({
      ...data,
      size: val,
    });
    const res = plants.filter((plant) => plant.size === val);
    setResult(res);
  };

  const handleRangeChange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const handleClickFilter = () => {
    const res = plants.filter(
      (plant) => plant.price >= rangeValue[0] && plant.price <= rangeValue[1]
    );
    setResult(res);
  };

  useEffect(() => {
    changeResult(result);
  }, [result]);

  return (
    <div className="w-[310px] h-fit p-4">
      <p className="text-[18px] font-bold text-[#3D3D3D]">Categories</p>

      <div className="mt-[7px] px-[12px]">
        {categoriesList?.map((el, i) => (
          <div key={i} className="w-full flex justify-between items-center">
            <p
              onClick={() => handleCategory(el)}
              className={`py-2 cursor-pointer text-[#3D3D3D] ${
                isActive.category === el ? "font-bold text-[#46A358]" : ""
              }`}
            >
              {el}
            </p>

            <p>
              {`(${
                plants.filter((plant) => plant.category.includes(el)).length
              })`}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-bold text-[18px] text-[#3D3D3D] mt-9">Price Range</p>

        <Box
          sx={{
            width: 210,
            color: "#46A358",
            marginLeft: "16px",
            marginTop: "20px",
          }}
        >
          <Slider
            color="#46A358"
            value={rangeValue}
            min={25}
            max={210}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
          />
        </Box>

        <p className="p-4 text-[15px] text-[#3D3D3D]">
          Price:{" "}
          <span className="font-bold text-[#46A358]">{`$${rangeValue[0]} - $${rangeValue[1]}`}</span>
        </p>

        <button
          onClick={handleClickFilter}
          className="w-[90px] h-[35px] text-white rounded-md ml-4 font-bold bg-[#46A358]"
        >
          Filter
        </button>
      </div>

      <p className="text-[18px] font-bold text-[#3D3D3D] mt-[46px]">Sizes</p>

      <div className="mt-[7px] px-[12px]">
        {Object.values(plantSizes).map((el, i) => (
          <div key={i} className="w-full flex justify-between items-center">
            <p
              onClick={() => handleSize(el)}
              className={`py-2 cursor-pointer text-[#3D3D3D] ${
                isActive.size === el ? "font-bold text-[#46A358]" : ""
              }`}
            >
              {el}
            </p>
            <p>{`(${plants.filter((plant) => plant.size === el).length})`}</p>
          </div>
        ))}
      </div>

      <img className="mt-[20px]" src="/images/Super Sale Banner.png" alt="" />
    </div>
  );
}
