/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Lato Slab', 'serif'],
        'lato': ['Lato', 'sans-serif'], // Define a custom font family for Lato with specific weights
      },
      fontWeight: {
        'lato-light': 100,
        'lato-normal': 300,
        'lato-regular': 400,
      },
    },
  },
  variants: {},
  plugins: [],
}
