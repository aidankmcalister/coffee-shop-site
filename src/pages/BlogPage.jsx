import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import MapCard from "../components/hompageComponents/MapCard";

const BlogPage = () => {
  return (
    <div>
      BlogPage
      <Link to="/bloginner">
        <Button className="font-playfair">Read More...</Button>
      </Link>
      <MapCard />
    </div>
  );
};

export default BlogPage;
