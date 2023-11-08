import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import MapCard from "../components/hompageComponents/MapCard";
import FeaturedBlogsCard from "../components/blogpageComponents/FeaturedBlogsCard";
import BlogList from "../components/blogpageComponents/BlogList";

const BlogPage = () => {
  return (
    <div>
      <FeaturedBlogsCard />
      <BlogList />
      <MapCard />
    </div>
  );
};

export default BlogPage;
