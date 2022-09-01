module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#64748b',
        gelap: '#1c1917'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}