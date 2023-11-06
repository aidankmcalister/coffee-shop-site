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
import cakeIcon from "../../assets/icons/cakeIcon.svg";
import coffeeIcon from "../../assets/icons/coffeeIcon.svg";
import fastFoodIcon from "../../assets/icons/fastFoodIcon.svg";
import cocktailIcon from "../../assets/icons/cocktailIcon.svg";
import grillIcon from "../../assets/icons/grillIcon.svg";
import snacksIcon from "../../assets/icons/snacksIcon.svg";

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

export const socials = [
  { url: "https://www.facebook.com/thatsfinsweet/" },
  { url: "https://www.instagram.com/thatsfinsweet/?hl=en" },
  { url: "https://www.linkedin.com/company/finsweet/" },
  { url: "https://www.twitter.com/thatsfinsweet" },
];

export const details = [
  {
    stats: "10+ People",
    subtext: "We are a Small Team",
    paragraph:
      "At our cozy coffee shop, we're a small but passionate team dedicated to crafting the perfect brew for our community.",
  },
  {
    stats: "2014",
    subtext: "Unrivaled Coffee",
    paragraph:
      "Since 2014, we've been perfecting the art of creating the finest foam to top off your favorite coffee drinks.",
  },
  {
    stats: "200k",
    subtext: "We've served",
    paragraph:
      "With over 200,000 happy customers served, we've been turning coffee enthusiasts into loyal fans, one cup at a time.",
  },
];

export const ctaDetails = [
  {
    icon: cakeIcon,
    title: "Quafe Cake",
    description:
      "Indulge in our heavenly Quafe Cakes that melt in your mouth, a sweet delight you can't resist.",
  },
  {
    icon: coffeeIcon,
    title: "Coffee",
    description:
      "Experience coffee perfection with our handcrafted brews, brewed to elevate your coffee experience.",
  },
  {
    icon: fastFoodIcon,
    title: "Fast Food",
    description:
      "Satisfy your cravings with our delicious fast food options, perfect for a quick and tasty meal.",
  },
  {
    icon: cocktailIcon,
    title: "Cocktails",
    description:
      "Unwind and enjoy our signature cocktails, expertly mixed to tantalize your taste buds.",
  },
  {
    icon: grillIcon,
    title: "Grill",
    description:
      "Delight in the sizzle and flavor of our grilled dishes, a feast for meat lovers and more.",
  },
  {
    icon: snacksIcon,
    title: "Snacks",
    description:
      "Our delightful snacks are perfect for munching, whether you're here for coffee or cocktails.",
  },
];
