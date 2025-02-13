/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#0A0B0E',
        'card-bg': '#12151A',
        'neon-blue': '#00F0FF',
        'neon-purple': '#B026FF',
        'neon-pink': '#FF26B9',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'border-color': 'rgba(0, 240, 255, 0.2)',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 240, 255, 0.3)',
        'neon-hover': '0 0 20px rgba(0, 240, 255, 0.5)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.6)' }
        }
      }
    },
  },
  plugins: [],
};