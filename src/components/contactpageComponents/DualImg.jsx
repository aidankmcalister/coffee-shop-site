import React from "react";
import coffeeCornerImg from "../../assets/imgs/coffeeCorner.jpg";
import coffeeContactImg from "../../assets/imgs/coffeeContact.jpg";

const DualImg = () => {
  return (
    <div>
      <div className="w-full lg:w-[80%] flex flex-row my-2 justify-end">
        <div className="w-1/2 mr-4 lg:w-2/5  aspect-[12/25] flex justify-center">
          <img
            src={coffeeContactImg}
            className="object-cover self-start rounded-xl shadow-lg h-[80%] xl:h-full xl:mr-5 xl:mb-24"
          />
        </div>
        <div className="w-1/2 ml-4 lg:w-2/5 aspect-[12/25] flex justify-center">
          <img
            src={coffeeCornerImg}
            className="object-cover rounded-xl shadow-lg h-[80%] self-end xl:h-full xl:ml-5 xl:mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default DualImg;
