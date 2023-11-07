import React from "react";

const MenuHeader = () => {
  return (
    <div className="flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className=" xl:w-[100%] mb-5">
        <div className="w-full flex items-center">
          <h5 className="font-playfair text-main-yellow">OUR MENU</h5>
          <hr className="ml-2 w-12" />
        </div>
        <div className="md:flex">
          <h1 className="font-playfair text-4xl font-bold">
            Explore Our Coffee and Food Delights
          </h1>
          <p className="my-2 md:ml-5 text-gray-500 md:w-[60%]">
            From rich espresso to mouthwatering dishes, our menu is designed to
            satisfy your cravings. Come for the coffee, stay for the food, and
            make every visit memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
