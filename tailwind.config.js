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
        'hero-pattern': "url('../assets/Rectangle 1630.png')",
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      boxShadow: { 
        'custom-white': '0.313rem 0.313rem 0 0.313rem #fff', 
        'slider-shadow':'-0.313rem -0.313rem 0 0.25rem #fff',
        'sm-slider-shadow':'-0.313rem -0.313rem 0 0.1rem #fff',
        'slider-shadow-2':'-0.313rem 0.313rem 0 0.25rem #fff',
        'sm-slider-shadow-2':'-0.313rem 0.313rem 0 0.1rem #fff',
        'slider-shadow-3':'0.313rem -0.313rem 0 0.25rem #fff',
        'sm-slider-shadow-3':'0.313rem -0.313rem 0 0.1rem #fff',
        'slider-shadow-4':'0.313rem 0.313rem 0 0.25rem #fff',
        'sm-slider-shadow-4':'0.313rem 0.313rem 0 0.1rem #fff',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}