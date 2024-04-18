import React from "react";

export default function MainBanner() {
  return (
    <div className="w-[1200px] px-[40px] bg-[#F5F5F5] h-[450px] flex items-center justify-between">
      <div>
        <p className=" text-[18px] font-medium">Welcome to GreenShop</p>
        <p className="text-[70px] p-0 font-[900] text-[#3D3D3D] w-[530px]">
          Let's Make a Better <span className="text-[#46A358]">Planet</span>
        </p>
        <p className="w-[550px] text-[14px] text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="w-[140px] h-[40px] mt-[44px] bg-[#46A358] rounded-[6px] text-white font-bold"> SHOP NOW</button>
      </div>
      <div>
        <img src="/images/01 1.png" alt="plant" />
      </div>
    </div>
  );
}
