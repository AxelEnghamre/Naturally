/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        spaceGey: "#343434",
        sunset: "#FF4E00",
        sunsetHover: "#DD4A09",
        tropical: "#00FFDD",
        glass: "#F5F5F5",
        rat: "#DBDADA",
        gravel: "#989898",
      },
      backgroundImage: {
        "hero-img": "url('/assets/images/hero_img.png')",
      },
    },
  },
  plugins: [],
};
