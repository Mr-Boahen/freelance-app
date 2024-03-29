/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        splinesans:["Spline Sans"],
        signika:["signika"],
        narrow:["Archivo Narrow"],
        jetbrains:["JetBrains Mono"]
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}





