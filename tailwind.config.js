const plugin  = require('tailwindcss/plugin')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addComponents, theme}){
      const add = ({
        '.text-black-current': {
            color: 'rgba(0,0,0,0.7)'
        },
        '.bg-nav':{
          backgroundColor:'rgba(249,250,251,255)'
        }
      })
      addComponents(add);
    })
  ],
}
