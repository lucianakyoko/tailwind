/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./basico/*.html",
    "./layout/*.html",
    "./flexbox/*.html",
    "./grid-template/*.html",
    "./personalizacao/*.html",
    "./hiper-prof/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1024px',
        '2xl': '1024px'
      }
    },
    extend: {
      colors: {
        purple: '#5840ba',
        lightpurple: '#382194',
        lightgray:'#d9d9d9',
        gray: '#8c8c8c'
      },
      // colors: {
      //   black: '#4A4A4A',
      //   red: '#fa8282',
      //   blue: '#0b287d',
      //   green: '#37ff1c'
      // },
      spacing: {
        '32': '32rem'
      },
      width: {
        '50': '50px'
      },
      height: {
        '50': '50px'
      },
      minWidth: {
        '1/2': '50%'
      },
      maxWidth: {
        '70': '70%'
      },
      minHeight: {
        '1/2': '50%'
      },
      maxHeight: {
        '70': '70%'
      },
      screens: {
        'sm':'480px'
      },
      fontFamily: {
        'italiana': ['Italiana', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'iceland': ['Iceland', 'sans-serif']
      },
      backgroundImage: {
        'fundo_marrom':"url('../img/fundo_marrom.jpg')",
        'cachorro': "url('../img/img_cachorro.jpg')"
      }
    },
  },
  plugins: [],
}
