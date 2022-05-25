module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '260px':'260px',
        '580px': '580px',
        '480px': '480px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}