/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'sky-light': '#b2ebf2',
        'night-fall': '#324856',
        'sage-mint' : '#a8bcba',
      },
    },
  },
  plugins: [],
}

