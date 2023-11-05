/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "main-yellow": "var(--main-yellow)",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      playfair: "var(--playfair)",
    },
  },
  plugins: [],
});
