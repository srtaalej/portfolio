/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{html,js,tsx,ts}',
  './components/**/*.{html,js,tsx,ts}',],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-forms')],
}