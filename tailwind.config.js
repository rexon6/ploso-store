/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF7F2',
          stone: '#E8E2D9',
          warm: '#D4C5B0',
          brown: '#8B7355',
          olive: '#4A5D3A',
          forest: '#2D3A22',
          ink: '#2C2C2C',
          muted: '#6B6B6B',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
