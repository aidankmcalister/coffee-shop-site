import React from "react";
import { navbarLinks, socials } from "./constants/constants";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="border flex items-center flex-col">
      <a href="/">
        <h1 className=" text-2xl text-main-yellow relative">
          &#123;<span className="font-bold">FinSweet</span>
        </h1>
      </a>
      <div className="flex w-screen justify-around">
        <ul className="flex flex-col">
          {navbarLinks.map((navbarLink, index) => (
            <li key={`large-${index}`} className="">
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
        <ul className="grid grid-cols-2 gap-1 items-center">
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
      <div className="flex flex-col">
        <p>
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

// mt-1 first:mt-0
