/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'vh-900': { raw: '(min-height: 900px)' }
      }
    }
  },
  plugins: []
};
