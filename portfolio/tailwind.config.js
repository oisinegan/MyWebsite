/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  safelist: ["animate-[fade-in_1s_ease-in-out]"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
