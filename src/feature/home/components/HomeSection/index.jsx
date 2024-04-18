import React, { useState } from 'react'
import { plants } from '../../../../data/mockData';
import { plantStatus } from '../../../../constants';
import PlantsFilter from '../PlantsFilter';
import PlantsList from '../PlantsList';

const HomeSection = () => {
    const [data, setData] = useState(plants);
    const [isActive, setIsActive] = useState(plantStatus.All);
  
    const handleStatus = (val) => {
      setIsActive(val);
      if (val === plantStatus.All) {
        setData(plants);
      } else {
        const res = plants.filter((plant) => plant.status === val);
        setData(res);
      }
    };
  
    const handleChangeResult = (res) => {
      setData(res);
    };

  return (
    
    <div className="mt-[46px] flex  gap-[50px] m-auto">
        <PlantsFilter data={data} changeResult={handleChangeResult} />

        <div className="w-[865px]">
        <div className="flex gap-[37px]">
            {Object.values(plantStatus).map((el, i) => (
            <p
                key={i}
                onClick={() => handleStatus(el)}
                className={`cursor-pointer ${
                isActive === el
                    ? "font-bold text-[#46A358] border-b-[2px] border-[#46A358]"
                    : ""
                }`}
            >
                {el}
            </p>
            ))}
        </div>

        <PlantsList data={data} />
        </div>
    </div>
  )
}

export default HomeSection