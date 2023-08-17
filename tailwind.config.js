/** @type {import('tailwindcss').Config} */
export default {
  node: "jit",
  content: [],  
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},       
    colors: {
      "white": '#fff',
      "gray-100": '#f2f2f2',
      "gray-200": "#DADADA",
      "gray-300": "#717171",
      "gray-400": "#686868",
      "gray-500": "#292929",
      "green-100": '#39a977f2',
      "red-100": "#eb6969"
    },
    fontFamily: {
      default: "Lexend Deca"
    },    
  },
  plugins: [],
}