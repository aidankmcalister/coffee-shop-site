import React from "react";
import MapCard from "../components/hompageComponents/MapCard";
import DualImg from "../components/contactpageComponents/DualImg";
import ContactForm from "../components/contactpageComponents/ContactForm";

const ContactPage = () => {
  return (
    <div className="items-center md:mx-auto m-4 lg:max-w-[80%] md:max-w-[80%] my-10">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex lg:items-center">
          <ContactForm />
        </div>
        <div className="md:hidden lg:hidden xl:inline-block">
          <DualImg />
        </div>
      </div>
      <MapCard />
    </div>
  );
};

export default ContactPage;
