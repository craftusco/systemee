/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.vue',
],
  theme: {
    extend: {
      colors: {
        primary: '#029182',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        },
      },
    },
  },
  plugins: [],
}

