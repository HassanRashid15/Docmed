/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'docmed-blue': '#009DFF',
        'docmed-light': '#E5F7FF',
        'docmed-hover': '#00BFFF',
      },
    },
  },
  plugins: [],
}
