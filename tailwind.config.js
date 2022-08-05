/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        shoulders: ['Big Shoulders Display', 'sans-serif'],
      },
      colors: {
        night: '#151515',
        dusk: '#202022',
        day: '#f5ffff',
        dawn: '#949495',
        dortmund: '#fde100'
      }
    },
  },
  plugins: [],
}
