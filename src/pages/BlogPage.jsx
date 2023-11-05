import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div>
      BlogPage
      <Link to="/bloginner">
        <Button className="font-playfair">Read More...</Button>
      </Link>
    </div>
  );
};

export default BlogPage;
