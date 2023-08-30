/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexShrink: {
        0: '0',
        2: '2'
      },
      fontFamily: {
        'poppins': [ 'Poppins' ],
        'roboto': [ 'Roboto' ],
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}

