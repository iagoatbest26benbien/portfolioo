/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A087FF',
        secondary: '#AC47AA',
        dark: '#000000',
        covergreen: {
          DEFAULT: '#00D300', // Vert Cover Green
          dark: '#0A1E13',   // Vert foncé inspiré du logo
        },
        anime: {
          pink: '#FF69B4',
          blue: '#4169E1',
          purple: '#9370DB',
        },
        white: '#FFFFFF',
        black: '#000000',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 