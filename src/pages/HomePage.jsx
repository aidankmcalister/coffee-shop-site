import React from "react";
import { Button } from "@material-tailwind/react";
import Hero from "../components/hompageComponents/Hero";
import AboutUsCard from "../components/hompageComponents/AboutUsCard";
import CTA from "../components/hompageComponents/CTA";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUsCard />
      <CTA />
    </div>
  );
};

export default HomePage;
