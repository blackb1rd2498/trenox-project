
import 'flowbite'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./dist/pages*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend:
    {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}