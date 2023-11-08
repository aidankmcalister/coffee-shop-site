import React from "react";
import AboutUsCard from "../components/hompageComponents/AboutUsCard";
import baristaImg from "../assets/imgs/barista.jpg";
import coffeeGuyImg from "../assets/imgs/guySitting.jpg";
import HistoryCard from "../components/aboutpageComponents/HistoryCard";
import MapCard from "../components/hompageComponents/MapCard";
import Standings from "../components/aboutpageComponents/Standings";

const AboutPage = () => {
  return (
    <div>
      <AboutUsCard img1={baristaImg} img2={coffeeGuyImg} />
      <HistoryCard />
      <Standings />
      <MapCard />
    </div>
  );
};

export default AboutPage;
