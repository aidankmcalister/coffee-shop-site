import React from "react";
// import { Button } from "@material-tailwind/react";
import Hero from "../components/hompageComponents/Hero";
import AboutUsCard from "../components/hompageComponents/AboutUsCard";
import CTA from "../components/hompageComponents/CTA";
import OurMenu from "../components/hompageComponents/OurMenu";
import Testimonial from "../components/hompageComponents/Testimonial";
import BlogCards from "../components/hompageComponents/BlogCards";
import MapCard from "../components/hompageComponents/MapCard";
import knowMoreImage1 from "../assets/imgs/knowMoreImage1.png";
import knowMoreImage2 from "../assets/imgs/knowMoreImage2.png";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUsCard img1={knowMoreImage1} img2={knowMoreImage2} />
      <CTA />
      <OurMenu />
      <Testimonial />
      <BlogCards />
      <MapCard />
    </div>
  );
};

export default HomePage;
