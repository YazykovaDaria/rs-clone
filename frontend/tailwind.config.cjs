/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    minWidth: {
      400: '400px',
    },
    extend: {
      colors: {
        gray: {
          350: 'rgb(83, 100, 113)',
        },
        blue: {
          350: 'rgb(29, 155, 240)',
        },
        green: {
          350: 'rgb(12, 178, 69)',
        },
      },
    },
  },
  plugins: [],
};
