import {
  HomeIcon as SolidHomeIcon,
  UserIcon as SolidUserIcon,
  BookOpenIcon as SolidBookOpenIcon,
  NewspaperIcon as SolidNewspaperIcon,
  PaperAirplaneIcon as SolidPaperAirplaneIcon,
  BuildingStorefrontIcon as SolidStoreFrontIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  UserIcon as OutlineUserIcon,
  BookOpenIcon as OutlineBookOpenIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  PaperAirplaneIcon as OutlinePaperAirplaneIcon,
  BuildingStorefrontIcon as OutlineStoreFrontIcon,
} from "@heroicons/react/24/outline";
import SolidMenuIcon from "../../assets/icons/menuIconSolid.svg?react";
import OutlineMenuIcon from "../../assets/icons/menuIconOutline.svg?react";

export const navbarLinks = [
  {
    label: "Home",
    solidIcon: <SolidHomeIcon color="#ffb577" />,
    outlineIcon: <OutlineHomeIcon color="#fff" />,
    link: "/",
  },
  {
    label: "About Us",
    solidIcon: <SolidUserIcon color="#ffb577" />,
    outlineIcon: <OutlineUserIcon color="#fff" />,
    link: "/about",
  },
  {
    label: "Menu",
    solidIcon: <SolidNewspaperIcon color="#ffb577" />,
    outlineIcon: <OutlineNewspaperIcon color="#fff" />,
    link: "/menu",
  },
  {
    label: "Our Story",
    solidIcon: <SolidBookOpenIcon color="#ffb577" />,
    outlineIcon: <OutlineBookOpenIcon color="#fff" />,
    link: "/ourstory",
  },
  {
    label: "Blog",

    solidIcon: <SolidStoreFrontIcon color="#ffb577" />,
    outlineIcon: <OutlineStoreFrontIcon color="#fff" />,
    link: "/blog",
  },
  {
    label: "Contact",

    solidIcon: <SolidPaperAirplaneIcon color="#ffb577" />,
    outlineIcon: <OutlinePaperAirplaneIcon color="#fff" />,
    link: "/contact",
  },
];
