/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      margin: {
        '17': '4.25rem', // Ajout d'une classe mt-17 avec une marge supérieure de 4.25rem
        '18': '4.5rem',  // Ajout d'une classe mt-18 avec une marge supérieure de 4.5rem
      },
      colors:{
        'bbrown':"#333333"
      }
    },
    fontFamily: {
      'times': ['Times New Roman', 'serif'],
    },
    
    
  },
  plugins: [],
}