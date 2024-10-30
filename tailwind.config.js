/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
           'primary': '#22A5B3',
           'sceondary': '#254769',
      },
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif'],
        'poppins':["Poppins", 'sans-serif'],
        'south_catalonia':['south_catalonia']
      },
      backgroundImage: {
        'hero-image': "url('../assets/bannar.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}