import React from "react";
import CoffeeHeroImg from "../../assets/imgs/CoffeeHeroImg.png";
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className="md:mx-auto flex flex-col items-center m-4 lg:max-w-[80%] md:max-w-[80%] lg:flex-row">
      <div className="my-2 lg:mr-10">
        <h1 className="font-playfair text-4xl font-bold my">
          We serve high quality <br className="" /> foods of all kinds.
        </h1>
        <p className="mb-2 mt-3 text-gray-500">
          Step into our welcoming coffee nook, where the comforting aroma of
          freshly brewed coffee and friendly chatter create the perfect escape.
        </p>
        <a href="/menu" className="inline-block">
          <Button
            style={{ textTransform: "none" }}
            className="rounded-sm text-main-gray bg-main-yellow flex items-center p-4 px-5 mt-2 text-lg"
          >
            View Menu
            <ArrowLongRightIcon className="h-5 w-5 ml-1" />
          </Button>
        </a>
        <h1 className="font-playfair text-xl mt-4">Opening Times</h1>
        <p className="text-gray-600">
          Sunday to Saturday | 09:00 AM to 11:00 PM
        </p>
        <h1 className="font-playfair text-xl mt-4">Location</h1>
        <p className="text-gray-600">Master canteen, BBSR , Odisha 752054</p>
        <h1 className="font-playfair text-xl mt-4">Call Us</h1>
        <p className="text-gray-600">+1 977-646-2441</p>
      </div>
      <img
        className="rounded-2xl mt-2 shadow-lg lg:w-1/2 w-auto"
        src={CoffeeHeroImg}
      />
    </div>
  );
};

export default Hero;
