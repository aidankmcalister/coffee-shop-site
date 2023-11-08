import React from "react";

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
