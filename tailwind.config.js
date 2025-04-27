/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sea-blue': {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c0e0ff',
          300: '#80c0ff',
          400: '#4080ff',
          500: '#1050ff',
          600: '#0040ff',
          700: '#0030e0',
          800: '#0020c0',
          900: '#001090',
        },
        'ocean': {
          50: '#f0ffff',
          100: '#e0ffff',
          200: '#c0ffff',
          300: '#80ffff',
          400: '#40e0ff',
          500: '#10c0e0',
          600: '#00a0c0',
          700: '#008090',
          800: '#006070',
          900: '#004050',
        },
        'gold': {
          50: '#fffbf0',
          100: '#fff8e0',
          200: '#fff0c0',
          300: '#ffe080',
          400: '#ffd040',
          500: '#ffc000',
          600: '#e0a000',
          700: '#c08000',
          800: '#a06000',
          900: '#805000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        federant: ['Federant', 'sans-serif'],
      },
      backgroundImage: {
        'cruise-pattern': "url('https://images.pexels.com/photos/144640/pexels-photo-144640.jpeg')",
        'ocean-view': "url('https://images.pexels.com/photos/1076991/pexels-photo-1076991.jpeg')",
        'cruise-ship': "url('https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg')",
      },
      animation: {
        'wave': 'wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};