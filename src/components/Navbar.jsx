import React, { useState } from "react";
import { navbarLinks } from "./constants/constants";
import Sidebar from "./Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  return (
    <div className="flex items-center justify-between p-3 mx-5">
      <h1 className=" text-3xl text-main-yellow">&#123;FinSweet</h1>
      <ul className="hidden justify-between md:flex">
        {navbarLinks.map((navbarLink, index) => (
          <li
            key={`large-${index}`}
            className="mr-5 last:mr-0 active:text-main-yellow"
          >
            <a href={navbarLink.link}>{navbarLink.label}</a>
          </li>
        ))}
      </ul>
      <button
        className="z-20 h-10 w-10 md:hidden block"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? <XMarkIcon /> : <Bars3Icon />}
      </button>

      {isSidebarVisible && <Sidebar navbarLinks={navbarLinks} />}
    </div>
  );
};

export default Navbar;
