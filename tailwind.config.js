/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "200px",
      tablet: "600px",
      desktop: "1150px",
    },
  },
  plugins: [],
};
