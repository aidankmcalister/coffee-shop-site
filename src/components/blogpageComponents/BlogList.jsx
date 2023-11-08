import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../constants/constants";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const BlogList = () => {
  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className="flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {sortedBlogPosts.map((blogPost, index) => (
          <Link to="/blog" key={`menuPreview-${index}`}>
            <Card className="mt-12 max-w-md md:max-w-xl flex items-center bg-gray-900 bg-opacity-30 h-[93%]">
              <CardHeader shadow={false} className="h-60 w-full">
                <img
                  className="w-full h-full object-cover border-none"
                  src={blogPost.img}
                  alt={blogPost.title}
                />
              </CardHeader>
              <CardBody className="flex flex-col w-full">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center text-main-yellow font-playfair font-bold text-2xl"
                >
                  {blogPost.title}
                </Typography>
                <Typography className="text-center text-gray-500">
                  {blogPost.paragraph}
                </Typography>
              </CardBody>
              <CardFooter className="flex-1 flex items-end">
                <Typography variant="paragraph" className="-mt-4 font-semibold">
                  {blogPost.date}
                </Typography>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
