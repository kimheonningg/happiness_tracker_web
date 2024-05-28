/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'PinkTheme/Level1': '#FAE8ED',
        'PinkTheme/Level2': '#FDD5DF',
        'PinkTheme/Level3': '#FFC2D1',
        'PinkTheme/Level4': '#FFB2C5',
        'PinkTheme/Level5': '#FFA2B9'
      }
    },
  },
  plugins: [],
}

