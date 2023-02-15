/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
