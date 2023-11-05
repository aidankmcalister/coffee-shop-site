import React, { useState } from "react";
import { navbarLinks } from "./constants/constants";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  return (
    <div className="flex items-center justify-between p-3">
      <a href="/">
        <h1 className=" text-3xl text-main-yellow left- relative">
          &#123;FinSweet
        </h1>
      </a>
      <ul className="hidden justify-between md:flex">
        {navbarLinks.map((navbarLink, index) => (
          <li key={`large-${index}`} className="mr-5 last:mr-0">
            <a
              href={navbarLink.link}
              className={
                location.pathname === navbarLink.link ? "text-main-yellow" : ""
              }
            >
              {navbarLink.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="z-20 h-10 w-10 md:hidden block  relative"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? <XMarkIcon /> : <Bars3Icon />}
      </button>

      {isSidebarVisible && <Sidebar navbarLinks={navbarLinks} />}
    </div>
  );
};

export default Navbar;
