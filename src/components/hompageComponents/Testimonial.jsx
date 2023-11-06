import React from "react";
import { Avatar } from "@material-tailwind/react";
import coffeeShopBackground from "../../assets/imgs/coffeeShopBackground.jpg";
import avatar from "../../assets/imgs/avatar.jpg";

const Testimonial = () => {
  return (
    <div className="bg-gray-900 bg-opacity-30 pt-10 lg:pt-0 lg:flex items-center">
      <div className="px-5 pb-2">
        <h1 className="text-2xl font-playfair font-bold lg:text-3xl xl:text-4xl">
          " As I walked into the coffee shop, I found myself immersed in a world
          of comforting aromas, the soothing hum of conversations, and the
          promise of a perfect cup of coffee. "
        </h1>
        <div className="flex mb-3 mt-5">
          <Avatar src={avatar} alt="Avatar" className="mr-3" />
          <div>
            <p className="text-gray-400 text-lg font-bold">Finn Möller</p>
            <p className="text-gray-600 -mt-1">Berlin, Germany</p>
          </div>
        </div>
      </div>
      <img src={coffeeShopBackground} alt="CoffeeShop" className="lg:w-1/2" />
    </div>
  );
};

export default Testimonial;
