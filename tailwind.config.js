/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,jsx,ts,tsx}',
              "./node_modules/tw-elements/dist/js/**/*.js",
              
],
  theme: {
    extend: {},
    fontFamily:{
      'dana': ['dana'],
    }
  },
  plugins: [],
}

