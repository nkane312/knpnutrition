/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: {
          // text-black
          50: '#f2fbfa',
          100: '#d3f4f0',
          200: '#a7e8e0',
          300: '#74d4cd',
          400: '#47bab5',
          // text-white
          DEFAULT: '#2d9f9b',
          600: '#268f8e',
          700: '#1f6566',
          800: '#1d5152',
          900: '#1c4545',
          950: '#0b2628',
        },
        shallow: {
          // text-black
          50: '#effcfc',
          100: '#d6f6f7',
          200: '#b3ecee',
          300: '#83dfe3',
          400: '#42c5ce',
          // text-white
          DEFAULT: '#27a9b3',
          600: '#238a97',
          700: '#236f7b',
          800: '#245b66',
          900: '#224c57',
          950: '#11323b',
        },
        'wet-sand': {
          // text-black
          50: '#f7f6f5',
          100: '#edeae7',
          200: '#cec8c1',
          300: '#c1b9b0',
          // text-white
          DEFAULT: '#a79a90',
          500: '#95857a',
          600: '#88776e',
          700: '#72625c',
          800: '#5e524e',
          900: '#4d4441',
          950: '#292321',
        },
        'dry-sand': {
          // text-black
          50: '#fdf7ef',
          100: '#faecd7',
          200: '#f5d8b3',
          300: '#eebd83',
          400: '#e69851',
          // text-white
          DEFAULT: '#e07d2f',
          600: '#d16525',
          700: '#ae4d20',
          800: '#8b3f21',
          900: '#70351e',
          950: '#3c190e',
        },
        rock: {
          // text-black
          50: '#f4f6f7',
          100: '#e4e9e9',
          200: '#ccd5d5',
          // text-white
          DEFAULT: '#94a7a8',
          400: '#7d9193',
          500: '#627678',
          600: '#546466',
          700: '#485456',
          800: '#40494a',
          900: '#383f41',
          950: '#232729',
        },
      },
      // colors: {
      //   deep: '#255e65',
      //   shallow: '#80b8a2',
      //   'wet-sand': '#b97f5f',
      //   'dry-sand': '#d9bea1',
      //   rock: '#106c72',
      // },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
