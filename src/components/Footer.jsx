import React from "react";
import { navbarLinks, socials } from "./constants/constants";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex items-center flex-col">
      <a href="/">
        <h1 className=" text-2xl text-main-yellow relative">
          &#123;<span className="font-bold">FinSweet</span>
        </h1>
      </a>
      <div className="flex w-screen justify-around md:flex-col items-center my-4">
        <ul className="flex flex-col md:flex-row md:mt-3 md:mb-2">
          {navbarLinks.map((navbarLink, index) => (
            <li key={`large-${index}`} className="md:mr-5 md:last:mr-0">
              <a
                href={navbarLink.link}
                className={
                  location.pathname === navbarLink.link
                    ? "text-main-yellow"
                    : ""
                }
              >
                {navbarLink.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-2 gap-1 items-center md:flex">
          {socials.map((social, index) => (
            <li key={`social-${index}`} className="p-2">
              <SocialIcon
                url={social.url}
                fgColor="#ffb577"
                bgColor="#302d32"
                style={{ height: 55, width: 55 }}
              />
            </li>
          ))}
        </ul>
      </div>
      <hr width="80%" className="border border-main-gray my-5" />
      <div className="flex flex-col">
        <p className="text-gray-700">
          Design by{" "}
          <a
            href="https://finsweet.com/"
            className="text-main-yellow underline"
          >
            &#123;FinSweet
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
