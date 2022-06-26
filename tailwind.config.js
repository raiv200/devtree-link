module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {

      boxShadow: {
        '3xl': '0 0 55px 0px #ffffff',
        '4xl': '0 0 25px 0px #111111',
        'sm-dark': '0 0 5px 3px #ffffff',
      },

      fontFamily:{
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      },

      keyframes:{
        spin1:{
           'from':{transform: 'rotate(0deg)'},
           'to':{transform: 'rotate(360deg)'},
        },
        
      },

      animation:{
        'spin-slow':'spin1 12s linear infinite',
      },
    },
  },
  plugins: [],
}
