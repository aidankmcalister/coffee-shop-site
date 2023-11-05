import React from "react";
import { useLocation } from "react-router-dom";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

const Sidebar = ({ navbarLinks }) => {
  const location = useLocation();

  return (
    <Card className="z-10 p-2 top-2 left-2 right-2 bg-gray-900 absolute animate-fade-left animate-duration-200">
      <h1 className="text-3xl text-main-yellow">&#123;FinSweet</h1>
      <List>
        {navbarLinks.map((navbarLink, index) => (
          <a href={navbarLink.link} key={`small-${index}`}>
            <ListItem
              className={`border mt-1 border-gray-900 ${
                location.pathname === navbarLink.link
                  ? "border-main-yellow"
                  : ""
              }`}
            >
              <ListItemPrefix className="h-5 w-5">
                {location.pathname === navbarLink.link
                  ? navbarLink.solidIcon
                  : navbarLink.outlineIcon}
              </ListItemPrefix>
              <p
                className={`text-lg ${
                  location.pathname === navbarLink.link
                    ? "text-main-yellow"
                    : "text-white"
                }`}
              >
                {navbarLink.label}
              </p>
            </ListItem>
          </a>
        ))}
      </List>
    </Card>
  );
};

export default Sidebar;
