import { AvatarGenerator } from "random-avatar-generator";
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
import blogPost1 from "../../assets/imgs/blogPost1.jpg";
import blogPost2 from "../../assets/imgs/blogPost2.jpg";
import blogPost3 from "../../assets/imgs/blogPost3.jpg";
import blogPost4 from "../../assets/imgs/blogPost4.jpg";
import blogPost5 from "../../assets/imgs/blogPost5.jpg";
import blogPost6 from "../../assets/imgs/blogPost6.jpg";

const generator = new AvatarGenerator();

export const navbarLinks = [
  {
    label: "Home",
    solidIcon: <SolidHomeIcon color="#ffb577" />,
    outlineIcon: <OutlineHomeIcon color="#fff" />,
    link: "/",
  },
  {
    label: "Menu",
    solidIcon: <SolidNewspaperIcon color="#ffb577" />,
    outlineIcon: <OutlineNewspaperIcon color="#fff" />,
    link: "/menu",
  },
  {
    label: "About Us",
    solidIcon: <SolidUserIcon color="#ffb577" />,
    outlineIcon: <OutlineUserIcon color="#fff" />,
    link: "/about",
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

export const blogPosts = [
  {
    date: "November 8, 2018",
    title: "A Sip of Serenity",
    paragraph:
      "I took a moment to enjoy the serenity of our coffee shop, sipping on a warm brew while soaking in the soothing ambiance.",
    img: coffeeSerenity,
    avatar: generator.generateRandomAvatar(),
    name: "Eleanor Smith",
  },
  {
    date: "June 20, 2017",
    title: "Bean Magic Unveiled",
    paragraph:
      "Each cup at our coffee shop is a journey through flavors, revealing the magic that lies within every perfectly roasted bean.",
    img: coffeeBeans,
    avatar: generator.generateRandomAvatar(),
    name: "James Anderson",
  },
  {
    date: "August 5, 2016",
    title: "Coffee and Connection",
    paragraph:
      "In our coffee shop, I found not just great brews but also cherished moments, where conversations flowed as easily as our espresso.",
    img: coffeeDate,
    avatar: generator.generateRandomAvatar(),
    name: "Sophia Ramirez",
  },
  {
    date: "March 30, 2019",
    title: "Mornings at {FinSweet Coffee",
    paragraph:
      "Starting the day with a cup of our finest brew is like a daily ritual, a delightful habit that brightens each morning.",
    img: blogPost1,
    avatar: generator.generateRandomAvatar(),
    name: "David Williams",
  },
  {
    date: "September 12, 2016",
    title: "The Art of Latte",
    paragraph:
      "Explore the delicate art of crafting the perfect latte, from frothing milk to creating exquisite latte art designs.",
    img: blogPost2,
    avatar: generator.generateRandomAvatar(),
    name: "Olivia Turner",
  },
  {
    date: "April 5, 2017",
    title: "The Secrets of Coffee Beans",
    paragraph:
      "Delve into the fascinating world of coffee beans, from their origins to the unique flavors they bring to your cup.",
    img: blogPost3,
    avatar: generator.generateRandomAvatar(),
    name: "Michael Johnson",
  },
  {
    date: "July 15, 2015",
    title: "Exploring Espresso Varieties",
    paragraph:
      "Discover the diverse world of espresso and the various types of espresso beverages that tantalize your taste buds.",
    img: blogPost4,
    avatar: generator.generateRandomAvatar(),
    name: "Sophie Clark",
  },
  {
    date: "November 8, 2016",
    title: "Caffeine and Creativity",
    paragraph:
      "Uncover the intriguing connection between caffeine and creativity, and how a cup of coffee can spark your imagination.",
    img: blogPost5,
    avatar: generator.generateRandomAvatar(),
    name: "Daniel Martin",
  },
  {
    date: "January 20, 2015",
    title: "Coffee and Culinary Pairing",
    paragraph:
      "Experience the delightful world of coffee and culinary pairing, where the perfect coffee complements your favorite dishes.",
    img: blogPost6,
    avatar: generator.generateRandomAvatar(),
    name: "Mia Hernandez",
  },
];

export const articles = [
  {
    date: "February 5, 2024",
    title: "The Art of Coffee Roasting",
    paragraph:
      "Explore the intricate process of coffee bean roasting, from the source to the perfect roast that delights your taste buds.",
    // img: articleRoasting,
    avatar: generator.generateRandomAvatar(),
    name: "Emily Thompson",
  },
  {
    date: "March 20, 2024",
    title: "Crafting Unique Espresso Blends",
    paragraph:
      "Discover the secrets behind creating distinct espresso blends, combining various beans for a truly exceptional coffee experience.",
    // img: articleEspresso,
    avatar: generator.generateRandomAvatar(),
    name: "William Harris",
  },
  {
    date: "April 10, 2024",
    title: "The Coffee Shop Story",
    paragraph:
      "Dive into the history and journey of {FinSweet Coffee, the place where great coffee and unforgettable moments intertwine.",
    // img: articleStory,
    avatar: generator.generateRandomAvatar(),
    name: "Linda Robinson",
  },
  {
    date: "May 15, 2024",
    title: "Sustainability in Coffee Culture",
    paragraph:
      "Learn about our commitment to sustainability, from sourcing to brewing, and how we contribute to a greener coffee industry.",
    // img: articleSustainability,
    avatar: generator.generateRandomAvatar(),
    name: "Daniel Brown",
  },
];

export const timelineData = [
  {
    year: 2014,
    title: "Grand Opening",
    description: "The {FinSweet coffee shop opened its doors in 2014.",
  },
  {
    year: 2017,
    title: "Community Events",
    description: "Started hosting community events and gatherings.",
  },
  {
    year: 2019,
    title: "Menu Expansion",
    description: "Expanded the menu with new and delicious offerings.",
  },
  {
    year: 2023,
    title: "Sustainability Efforts",
    description: "Focused on sustainability and eco-friendly practices.",
  },
];
