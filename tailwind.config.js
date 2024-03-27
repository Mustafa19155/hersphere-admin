/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1201px",
        "2xl": "1401px",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // blue: "#001F3D",
        // orange: "#E87800",
        // green: "#31CD63",
        white2: "#F6F8F9",
        green: "#13B887",
        red: "#FF0000",
        gray2: "#A1A1A1",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    "prettier-plugin-tailwindcss",
  ],
};
