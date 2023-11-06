import React from "react";
import { ctaDetails } from "../constants/constants";

const CTA = () => {
  return (
    <div className="flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className=" xl:w-[100%] mb-5">
        <div className="w-full flex items-center">
          <h5 className="font-playfair text-main-yellow">
            WHAT ARE WE SERVING
          </h5>
          <hr className="ml-2 w-12" />
        </div>
        <div className="md:flex">
          <h1 className="font-playfair text-4xl font-bold">
            We all have to eat, so why not do it beautifully?
          </h1>
          <p className="my-2 md:ml-5 text-gray-500 md:w-[60%]">
            When it comes to satisfying your taste buds,{" "}
            <span className="text-main-yellow">&#123;FinSweet</span> is the
            place to be. Come for the coffee, stay for the food, and make every
            meal a beautiful experience.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {ctaDetails.map((ctaDetail, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-30 p-10 flex flex-col justify-between"
          >
            <div className="w-14 h-14 p-3 rounded-full bg-main-gray">
              <img
                className="w-full h-full object-contain"
                src={ctaDetail.icon}
                alt={ctaDetail.title}
              />
            </div>
            <div className="flex flex-col flex-grow justify-center">
              <h2 className="my-3 text-4xl font-playfair font-bold">
                {ctaDetail.title}
              </h2>
              <p className="text-gray-500">{ctaDetail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTA;
