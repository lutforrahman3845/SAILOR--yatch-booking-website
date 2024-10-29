/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif'],
        'south_catalonia':['south_catalonia']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}