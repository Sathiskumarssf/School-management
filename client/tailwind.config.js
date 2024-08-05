/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgb(248, 237, 227)', // Add your custom color here
      },
    },
  },
  plugins: [],
}
