import React from "react";
import { blogPosts, plants } from "../../../../data/mockData";

export default function BlogPosts() {
  
  const limitedPlants = plants.slice(0, 2);

  return (
    <>
      <div className="m-auto w-full mt-[150px] flex justify-between">
        {limitedPlants.map((el) => (
          <div
            key={el.id}
            className="w-[586px] h-fit flex items-center justify-between pr-[20px]"
          >
            <img src={el.img} alt={el.title} />
            <div>
              <p className="text-right text-[18px] font-bold">{el.title}</p>

              <p className="text-right text-[#3D3D3D] mt-3">{el.description}</p>
              
              <button className="float-right mt-8 py-2 px-10 bg-[#46A358] rounded-md font-semibold text-white">
                Find more
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-[30px] mt-[140px] text-[#3D3D3D] m-auto font-bold w-fit">
        Our Blog Posts
      </h2>

      <p className="text-[14px] m-auto w-fit text-[#727272]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="flex justify-between mt-[35px] mb-4">
        {blogPosts.map((item) => (
          <div key={item.id} className="w-[268px]">
            <img src={item.img} alt={item.title} />
            <p className="text-[14px] font-medium text-[#46A358] w-full text-center">{item.date}</p>
            <p className="w-[230px] pl-[15px] font-bold text-[21px]">{item.title}</p>
            <p className="text-[14px] px-[15px] text-[#727272]">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
