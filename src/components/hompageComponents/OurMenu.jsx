import React from "react";
import { menuPreview } from "../constants/constants";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const OurMenu = () => {
  return (
    <div className="flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className=" xl:w-[100%] mb-5">
        <div className="w-full flex items-center">
          <h5 className="font-playfair text-main-yellow">OUR MENU</h5>
          <hr className="ml-2 w-12" />
        </div>
        <div className="md:flex">
          <div>
            <h1 className="font-playfair text-4xl font-bold">
              Discover our menu chart
            </h1>
            <p className="hidden md:block font-playfair mt-10 text-lg font-bold text-blue-100">
              Most Popular Picks
            </p>
          </div>
          <p className="my-2 md:ml-5 text-gray-500 md:w-[60%]">
            A Culinary Journey of Favourable Real Delights, Half Every Bite, and
            Mother's Special Creations. Explore our Ecstatic Menu and Packages,
            and don't hesitate to enquire for a memorable dining experience.
          </p>
          <p className="md:hidden font-playfair mt-5 text-lg font-bold text-blue-100">
            Most Popular Picks
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {menuPreview.map((item, index) => (
            <Card
              key={`menuPreview-${index}`}
              className="mt-12 max-w-md md:max-w-xl flex items-center bg-gray-900 bg-opacity-30"
            >
              <CardHeader shadow={false} className="h-60 w-full border-none">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </CardHeader>
              <CardBody className="flex justify-between w-full">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center text-white font-playfair font-bold text-2xl"
                >
                  {item.title}
                </Typography>
                <Typography className="text-center text-white font-bold">
                  {item.price}
                </Typography>
              </CardBody>
            </Card>
          ))}
          <a href="/menu" className="inline-block">
            <Button
              style={{ textTransform: "none" }}
              className="rounded-sm text-main-gray bg-main-yellow flex items-center p-4 px-5 mt-2 text-lg"
            >
              View Menu
              <ArrowLongRightIcon className="h-5 w-5 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
