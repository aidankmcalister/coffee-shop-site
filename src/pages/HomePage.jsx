import React from "react";
// import { Button } from "@material-tailwind/react";
import Hero from "../components/hompageComponents/Hero";
import AboutUsCard from "../components/hompageComponents/AboutUsCard";
import CTA from "../components/hompageComponents/CTA";
import OurMenu from "../components/hompageComponents/OurMenu";
import Testimonial from "../components/hompageComponents/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUsCard />
      <CTA />
      <OurMenu />
      <Testimonial />
    </div>
  );
};

export default HomePage;
