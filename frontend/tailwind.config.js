/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GrowUp Neon Green palette — matching growupmedia.in
        primary: {
          50: '#f9ffe6',
          100: '#f0ffcc',
          200: '#e2ff99',
          300: '#d4ff66',
          400: '#c5ff2e',
          500: '#C5FF2E',   // GrowUp Accent Neon Green
          600: '#9ecf18',
          700: '#7d9e0f',
          800: '#5b7008',
          900: '#3b4a04',
          950: '#1c2401',
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
        display: ['Outfit', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
