/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      margin: {
        '17': '4.25rem', // Ajout d'une classe mt-17 avec une marge supérieure de 4.25rem
        '18': '4.5rem',  // Ajout d'une classe mt-18 avec une marge supérieure de 4.5rem
        '84':'22rem',
        '98':'26rem',
      },
      top:{
        '98': '26rem',  
        '100':'30rem',
      },
      colors:{
        'bbrown':"#333333",
        'reed':["#f15048","!important"],
      },
      minHeight: {
        '553': '553px',
      },
      Height:{
        '553':'553px',
      },
      fontSize:{
        '9xl':'7rem',
      },
    },
    fontFamily: {
      'times': ['Times New Roman', 'serif !important'],
      'roboto':['Roboto Slab','serif !important'],
      'open':['Open Sans','sans-serif'],
    },
    
  },
  plugins: [],
}