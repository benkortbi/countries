/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
   /*(Dark Mode Elements)*/
  DarkBlue: 'hsl(209, 23%, 22%)',
/*(Dark Mode Background)*/
  VeryDarkBlue: 'hsl(207, 26%, 17%)',
/* (Light Mode Text)*/
 VeryDarkBlueL:'hsl(200, 15%, 8%)',
/*(Light Mode Input)*/
DarkGray: 'hsl(0, 0%, 52%)',
/*(Light Mode Background)*/
  VeryLightGray: 'hsl(0, 0%, 98%)',
/*(Dark Mode Text & Light Mode Elements)*/
 White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}