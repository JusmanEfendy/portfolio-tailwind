module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#64748b',
        gelap: '#1c1917',
        dark: '#0f172a',
        darkwhite: '#94a3b8'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}