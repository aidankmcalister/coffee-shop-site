import React from "react";
import mapImg from "../../assets/imgs/mapImg.svg";

const MapCard = () => {
  return (
    <div className="flex justify-center lg:justify-between flex-col lg:flex-row my-5 bg-gray-900 bg-opacity-30 lg:pt-0 lg:flex items-center">
      <div className="text-gray-600 lg:w-1/2  flex flex-col items-center">
        <div className="lg:w-3/5 w-full mt-5">
          <h1 className="text-gray-400 text-xl font-playfair font-bold">
            Working Hours
          </h1>
          <p>
            Sunday to Saturday
            <br />
            09:00 AM to 11:00 PM
          </p>
        </div>
        <div className="my-5 w-full lg:w-3/5">
          <h1 className="text-gray-400 text-xl font-playfair font-bold">
            Location
          </h1>
          <p>
            Street - 127, New York,
            <br />
            United States
            <br />
            546544
          </p>
        </div>
        <div className="lg:w-3/5 w-full mb-5">
          <h1 className="text-gray-400 text-xl font-playfair font-bold">
            Contact Us
          </h1>
          <p>+1 &#40;123&#41; 456-7890</p>
        </div>
      </div>

      <img src={mapImg} alt="CoffeeShop" className="lg:w-1/2" />
    </div>
  );
};

export default MapCard;
