import React from "react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

const Sidebar = ({ navbarLinks }) => (
  <Card className="z-10 p-2 top-2 left-2 right-2 bg-gray-900 absolute">
    <h1 className="text-3xl text-main-yellow">&#123;FinSweet</h1>
    <List>
      {navbarLinks.map((navbarLink, index) => (
        <a href={navbarLink.link}>
          <ListItem
            key={`small-${index}`}
            className="border active:border-main-yellow mt-1 border-gray-900"
          >
            <ListItemPrefix className="h-5 w-5">
              {navbarLink.outlineIcon}
            </ListItemPrefix>
            <p className="text-white active:text-main-yellow">
              {navbarLink.label}
            </p>
          </ListItem>
        </a>
      ))}
    </List>
  </Card>
);

export default Sidebar;
