/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#101828',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
