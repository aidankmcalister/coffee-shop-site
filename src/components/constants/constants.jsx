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
import coffeeImg from "../../assets/imgs/coffee.jpg";
import cupcakeImg from "../../assets/imgs/cupcake.jpg";
import friesImg from "../../assets/imgs/fries.jpg";
import hotchocoImg from "../../assets/imgs/hotchocolate.jpg";
import sandwichImg from "../../assets/imgs/sandwhich.jpg";
import soupImg from "../../assets/imgs/soup.jpg";
import coffeeSerenity from "../../assets/imgs/coffeeSerenity.jpg";
import coffeeBeans from "../../assets/imgs/coffeeBeans.jpg";
import coffeeDate from "../../assets/imgs/coffeeDate.jpg";
import espressoImg from "../../assets/imgs/espressoImg.jpg";
import pizzaImg from "../../assets/imgs/pizzaImg.jpg";
import tacoImg from "../../assets/imgs/tacoImg.jpg";
import icedTeaImg from "../../assets/imgs/iceTeaImg.jpg";
import burgerImg from "../../assets/imgs/burgerImg.jpg";
import pastaImg from "../../assets/imgs/pastaImg.jpg";
import saladImg from "../../assets/imgs/saladImg.jpg";
import muffinImg from "../../assets/imgs/muffinImg.jpg";
import smoothieImg from "../../assets/imgs/smoothieImg.jpg";

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

export const menuPreview = [
  {
    title: "Coffee",
    img: coffeeImg,
    price: "$2.50",
  },
  {
    title: "Hot Chocolate",
    img: hotchocoImg,
    price: "$3.00",
  },
  {
    title: "Sandwich",
    img: sandwichImg,
    price: "$6.50",
  },
  {
    title: "French Fries",
    img: friesImg,
    price: "$4.00",
  },
  {
    title: "Soup",
    img: soupImg,
    price: "$5.50",
  },
  {
    title: "Cupcake",
    img: cupcakeImg,
    price: "$2.00",
  },
];

export const menu = [
  {
    title: "Coffee",
    img: coffeeImg,
    price: "$2.50",
    category: "Drinks",
  },
  {
    title: "Hot Chocolate",
    img: hotchocoImg,
    price: "$3.00",
    category: "Drinks",
  },
  {
    title: "Sandwich",
    img: sandwichImg,
    price: "$6.50",
    category: "Lunch",
  },
  {
    title: "French Fries",
    img: friesImg,
    price: "$4.00",
    category: "Appetizers",
  },
  {
    title: "Soup",
    img: soupImg,
    price: "$5.50",
    category: "Lunch",
  },
  {
    title: "Cupcake",
    img: cupcakeImg,
    price: "$2.00",
    category: "Desserts",
  },
  {
    title: "Espresso",
    img: espressoImg,
    price: "$2.75",
    category: "Drinks",
  },
  {
    title: "Salad",
    img: saladImg,
    price: "$7.50",
    category: "Lunch",
  },
  {
    title: "Burger",
    img: burgerImg,
    price: "$8.00",
    category: "Dinner",
  },
  {
    title: "Muffin",
    img: muffinImg,
    price: "$2.25",
    category: "Desserts",
  },
  {
    title: "Iced Tea",
    img: icedTeaImg,
    price: "$2.75",
    category: "Drinks",
  },
  {
    title: "Pizza",
    img: pizzaImg,
    price: "$9.50",
    category: "Dinner",
  },
  {
    title: "Pasta",
    img: pastaImg,
    price: "$8.00",
    category: "Lunch",
  },
  {
    title: "Smoothie",
    img: smoothieImg,
    price: "$4.50",
    category: "Drinks",
  },
  {
    title: "Taco",
    img: tacoImg,
    price: "$5.00",
    category: "Dinner",
  },
];

export const blogLatestPosts = [
  {
    date: "October 15, 2023",
    title: "A Sip of Serenity",
    paragraph:
      "I took a moment to enjoy the serenity of our coffee shop, sipping on a warm brew while soaking in the soothing ambiance.",
    img: coffeeSerenity,
  },
  {
    date: "November 8, 2023",
    title: "Bean Magic Unveiled",
    paragraph:
      "Each cup at our coffee shop is a journey through flavors, revealing the magic that lies within every perfectly roasted bean.",
    img: coffeeBeans,
  },
  {
    date: "December 21, 2023",
    title: "Coffee and Connection",
    paragraph:
      "In our coffee shop, I found not just great brews but also cherished moments, where conversations flowed as easily as our espresso.",
    img: coffeeDate,
  },
];
