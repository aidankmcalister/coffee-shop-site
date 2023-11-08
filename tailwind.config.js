/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: {
          500: "#ffb577",
        },
      },
    },
    colors: {
      "main-yellow": "var(--main-yellow)",
      "main-gray": "var(--main-gray)",
      "secondary-gray": "var(--secondary-gray)",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      playfair: "var(--playfair)",
    },
  },
  plugins: [require("tailwindcss-animated")],
});
