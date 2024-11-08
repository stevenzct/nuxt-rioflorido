/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}', // Adjust according to your project structure
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ppneue': ['"PPNeueMontreal"', 'sans-serif'], // Default font-family
      },
      fontWeight: {
        'book': 400,
        'medium': 500,
        'bold': 700,
        'thin': 100,
        'semibolditalic': 600,
      },
    },
  },
  plugins: [],
}
