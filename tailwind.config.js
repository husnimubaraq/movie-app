/** 
 * @type {import('tailwindcss').Config} 
 * */

/* eslint-disable unicorn/prefer-module */
module.exports = {
  content: [
    "./features/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ['Montserrat']
      },
      colors: {
        black: '#1B1826',
        primary: '#78A3D4'
      }
    },
  },
  plugins: [],
}