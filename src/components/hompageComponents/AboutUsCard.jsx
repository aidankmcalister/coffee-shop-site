import React from "react";
import knowMoreImage1 from "../../assets/imgs/knowMoreImage1.png";
import knowMoreImage2 from "../../assets/imgs/knowMoreImage2.png";
import { details } from "../constants/constants";
import {
  UsersIcon,
  BuildingStorefrontIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const AboutUsCard = () => {
  function renderIconSwitch(index) {
    switch (index) {
      case 0:
        return <UsersIcon color="#ffb577" className="w-8 h-8" />;
      case 1:
        return <BuildingStorefrontIcon color="#ffb577" className="w-8 h-8" />;
      case 2:
        return <BanknotesIcon color="#ffb577" className="w-8 h-8" />;
      default:
        return null;
    }
  }

  return (
    <div className=" flex flex-col xl:flex-row items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className=" xl:w-[100%] xl:mr-0 ">
        <div className="w-full flex items-center">
          <h5 className="font-playfair text-main-yellow">KNOW MORE ABOUT US</h5>
          <hr className="ml-2 w-12" />
        </div>
        <div className="w-full">
          <h1 className="font-playfair text-4xl font-bold my">
            We source sustainable & <br /> line caught Foods
          </h1>
          <p className="my-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            praesentium, unde animi amet delectus ut reprehenderit quaerat!
            Eligendi officia, iste animi suscipit, a vel nihil quis vitae, harum
            voluptate atque!
          </p>
          <div className="flex flex-col lg:flex-row justify-center">
            {details.map((detail, index) => (
              <div
                key={`detail-${index}`}
                className="flex flex-col my-3 lg:mx-1 p-6 bg-gray-900 bg-opacity-30 rounded-lg"
              >
                <div className="flex justify-between md:flex-col">
                  <div className="flex items-center">
                    {renderIconSwitch(index)}
                    <h2 className="text-blue-100 text-2xl font-bold ml-3">
                      {detail.stats}
                    </h2>
                  </div>
                  <p className="my-1 text-lg text-gray-400 font-bold">
                    {detail.subtext}
                  </p>
                </div>
                <p className="text-gray-600">{detail.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-[80%] flex flex-row my-2 justify-end">
        <div className="w-1/2 lg:w-2/5  aspect-[12/25] flex justify-center">
          <img
            src={knowMoreImage1}
            className="self-start rounded-xl shadow-lg h-[80%] xl:h-full xl:mr-5 xl:mb-24"
          />
        </div>
        <div className="w-1/2 lg:w-2/5 aspect-[12/25] flex justify-center">
          <img
            src={knowMoreImage2}
            className="rounded-xl shadow-lg h-[80%] self-end xl:h-full xl:ml-5 xl:mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
