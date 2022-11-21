/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
       Open: ['Open Sans', "sans-serif"],
      },
      colors: {
        'sand':'#F0EBCE',
        'forest': '#146356',
        'light': '#FCF8E8',
        'accent': '#ECB390'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
