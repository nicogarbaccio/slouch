/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		],
  theme: {
    extend: {},
    colors: { 
      'dark-blue': '#101828',
      'slow-blue': '#5653FC',
      'greenish': '#42B6B3',
    },
    fontFamily: {
      unna: ['Unna', 'serif'],
      dm_sans: ['DM Sans','sans-serif'],
    }
  },
  plugins: [],
}