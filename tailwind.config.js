/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFCFD',
        softpink: '#F8D7E3',
        blush: '#F3B6CB',
        accentpink: '#E98FB3',
        deeprose: '#A94F73',
        textmain: '#4A3A40',
        textmuted: '#8B747D',
        cream: '#FFF3E6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        handwritten: ['Caveat', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'paper-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
        'notebook-lines': "repeating-linear-gradient(transparent, transparent 31px, #E5E7EB 31px, #E5E7EB 32px)",
      }
    },
  },
  plugins: [],
}
