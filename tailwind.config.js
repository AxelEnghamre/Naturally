/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        spaceGey: '#343434',
        sunset: '#FF4E00',
        tropical: '#00FFDD'
      }
    },
  },
  plugins: [],
}
