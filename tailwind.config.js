/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'hexagon': '24%',
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};