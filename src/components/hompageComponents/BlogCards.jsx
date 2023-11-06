import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { blogLatestPosts } from "../constants/constants";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const BlogCards = () => {
  return (
    <div className="flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <h1 className="font-playfair text-4xl font-bold w-full">
        Read our latest blogs
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {blogLatestPosts.map((blogPost, index) => (
          <Link to="/blog" key={`menuPreview-${index}`}>
            <Card className="mt-12 max-w-md md:max-w-xl flex items-center bg-gray-900 bg-opacity-30 h-[93%]">
              <CardHeader shadow={false} className="h-60 w-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={blogPost.img}
                  alt={blogPost.title}
                />
              </CardHeader>
              <CardBody className="flex flex-col justify-between w-full">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center text-gray-400 font-playfair font-bold text-2xl"
                >
                  {blogPost.title}
                </Typography>
                <Typography className="text-center text-gray-500">
                  {blogPost.paragraph}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
