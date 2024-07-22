/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary: "#1266dd",
        third: "#F73859",
      },
    },
  },
  plugins: [],
};
