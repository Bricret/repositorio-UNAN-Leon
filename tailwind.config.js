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
    },
  },
  plugins: [],
}

