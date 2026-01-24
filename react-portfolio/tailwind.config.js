/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fira: ['"Fira Code"', 'monospace'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};