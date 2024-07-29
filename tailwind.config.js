/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "dana":["dana", "sans"],
        "iranyekanweblight":["iranyekanweblight","sans"],
        "robotoregular":["robotoregular","sans"] 
      }
    },
  },
  plugins: [],
}

