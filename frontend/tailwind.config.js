/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold palette — matching logo's golden tones
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4A843',   // Main logo gold
          600: '#C49A38',   // Slightly deeper gold
          700: '#B8860B',   // Dark gold / amber
          800: '#92680A',   // Deep amber
          900: '#713F12',
          950: '#422006',
        },
        // Dark palette — matching logo's black background
        dark: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#a0a0a0',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#080808',
        },
        border: {
          DEFAULT: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
