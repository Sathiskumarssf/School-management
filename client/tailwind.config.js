/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
      customColor1: 'rgb(235, 244, 246)',
      customColor2: 'rgb(8, 131, 149)',
      customColor3: 'rgb(55, 183, 195)',
      customColor4: 'rgb(7, 25, 82)'
    },
     
    },
  },
  plugins: [],
}



