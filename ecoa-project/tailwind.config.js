/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'azulTec':'#0039A6',
        'blancoTec':'#ffffff'
      },
      fontFamily: {
        newsreader: ['Newsreader', 'serif'] // Add other fallback fonts if necessary
      },
      fontSize: {
        'newsreader-base': ['32px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em'
        }]
      },
      fontWeight: {
        'newsreader': 500
      },
      textAlign: {
        'newsreader-left': 'left'
      }
    },
  },
  plugins: [],
}