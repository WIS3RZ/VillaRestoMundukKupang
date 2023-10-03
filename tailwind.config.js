/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: 
  {
    
    extend: {
      screens:{
        'xs': '476px'
      },
      colors: {
        'drab-dark-brown' : '#313100ff',
        'dark-moss-green': {1: '#3C6C09ff', 2: '#2E5912ff', 3:'#2E5E0Cff'},
        'avocado': {
          1: '#42730Bff',
          2: 'rgb(133, 207, 49)',
          3: 'rgb(202, 255, 142)',},
          'transparent': 'transparent'
      },
      borderRadius:{
        'md-kupang-1': '37% 63% 57% 43% / 78% 32% 68% 22%'
      },
      fontFamily:
      {
        'domine': '"Domine"',
        'rubik': '"Rubik"',
        'oak-sans': '"Oak Sans"',
        'kaushan-script': '"Kaushan Script"'
      }, 
      backgroundImage:
      {
          'md-kupang-hero-1': "linear-gradient(to bottom, rgba(133, 207, 49, 0.25) , rgba(202, 255, 142, 0.3)), url('./src/assets/hero/hero1.jpg')",
          'md-kupang-hero-2': "linear-gradient(to bottom, rgba(133, 207, 49, 0.25) , rgba(202, 255, 142, 0.3)), url('./src/assets/hero/hero2.jpg')",
          'img-exp-1': "url('./src/assets/imgs/exp1-768x1024.jpg')", 'img-exp-2': "url('./src/assets/imgs/exp3-1024x768.jpg')", 
      }
    }, 
  },
  plugins: [
    require('daisyui'),
  ],
}

