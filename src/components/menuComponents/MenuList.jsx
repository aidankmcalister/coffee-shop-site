import React, { useState } from "react";
import { menu } from "../constants/constants";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const MenuList = () => {
  const categories = [...new Set(menu.map((item) => item.category))];

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredMenu = selectedCategory
    ? menu.filter((item) => item.category === selectedCategory)
    : menu;

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        <button
          key="all-button"
          className={`${
            selectedCategory === ""
              ? "bg-main-yellow text-black"
              : "bg-gray-900 bg-opacity-30 text-white"
          } py-2 px-4 m-2 rounded-full`}
          onClick={() => setSelectedCategory("")}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={`category-button-${index}`}
            className={`${
              selectedCategory === category
                ? "bg-main-yellow text-main-gray f"
                : "bg-gray-900 bg-opacity-30 text-white"
            } py-2 px-4 m-2 rounded-full`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex justify-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {filteredMenu.map((item, index) => (
            <Card
              key={`menuPreview-${index}`}
              className="mt-12 max-w-md md:max-w-xl flex items-center bg-gray-900 bg-opacity-30"
            >
              <CardHeader shadow={false} className="h-60 w-full border-none">
                <img
                  className="w-full h-full object-cover border-none"
                  src={item.img}
                  alt={item.title}
                />
              </CardHeader>
              <CardBody className="flex justify-between w-full">
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-center text-white font-playfair font-bold text-2xl"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="text-gray-500 font-bold"
                  >
                    {item.category}
                  </Typography>
                </div>
                <Typography className="text-center text-white font-bold flex items-center">
                  {item.price}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
