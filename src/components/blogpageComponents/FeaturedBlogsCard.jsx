import React, { useEffect, useState } from "react";
import { blogPosts } from "../constants/constants";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const FeaturedBlogsCard = () => {
  const [featuredPost, setFeaturedPost] = useState(null);

  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const blogLatestPosts = sortedBlogPosts.slice(0, 3);

  const selectRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * blogPosts.length);
    setFeaturedPost(blogPosts[randomIndex]);
  };

  useEffect(() => {
    selectRandomPost();
  }, []);

  return (
    <div className=" flex flex-col items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className="w-full text-4xl lg:text-6xl font-playfair font-bold mb-5 lg:mb-10 text-center">
        <h1>Featured Blogs</h1>
      </div>
      <div className="flex w-full">
        <div className="w-full">
          {featuredPost && (
            <div
              style={{
                backgroundImage: `url(${featuredPost.img})`,
              }}
              className="relative bg-cover bg-center -z-10 h-full"
            >
              <div className="absolute inset-0 bg-opacity-70 bg-gray-900 -z-10"></div>
              <div className="bg-[#937255] absolute px-3 py-2 inline-block tracking-wider">
                TRENDING
              </div>
              <div className="flex flex-col lg:max-w-3/5 py-20 lg:p-20 justify-around h-full mx-5 z-10">
                <h1 className="text-4xl font-playfair font-bold text-white">
                  {featuredPost.title}
                </h1>
                <p className="text-gray-200">{featuredPost.paragraph}</p>
                <p className="text-gray-300 text-sm">{featuredPost.date}</p>
              </div>
            </div>
          )}
        </div>
        <div className="xl:flex flex-col items-center ml-5 hidden">
          {blogLatestPosts.map((blogPost, index) => (
            <Card
              key={`latestPost-${index}`}
              className="w-full max-w-[48rem] flex-row my-5 first:my-0 last:my-0 bg-gray-900 bg-opacity-30"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none relative"
              >
                <img
                  src={blogPost.img}
                  alt={blogPost.title}
                  className="w-full h-full object-cover overflow aspect-[3/2]"
                />
              </CardHeader>

              <CardBody className="flex flex-col">
                <Typography
                  variant="h5"
                  className="font-bold font-playfair text-gray-400"
                >
                  {blogPost.title}
                </Typography>
                <div className="flex h-full flex-col justify-end">
                  <Typography variant="paragraph" className="">
                    {blogPost.date}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogsCard;

// {blogPosts.map((post) => (
//     <img src={post.avatar} />
//   ))}
