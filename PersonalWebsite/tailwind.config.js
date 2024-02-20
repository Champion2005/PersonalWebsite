/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'blue': '#22577A',
        'teal': '#38A3A5',
        'aqua': '#57CC99',
        'lime': '#80ED99',
        'pale': '#C7F9CC',
      },
    },
  },
  plugins: [],
}

