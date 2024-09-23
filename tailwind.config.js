/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        13: '83px'
      },
      fontSize: {
        '10xl': ['9rem', {lineHeight: '1.2'}]
      }
    },
  },
  plugins: [],
}

