/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'indigo': "#182F59",
      'green': "#5BBC2E",
      'light-white': "#EAEAEA",
      'light-white2': "#FAFAFA",
      'light-gray': "#494949"
    },
    boxShadow :{
       'shadow1x': '0px 10px 25px rgba(0,0,0,0.18)',
    },
    extend: {
      spacing: {
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        // 'kola': '2rem',
      }
    }
  },
  plugins: [],
}

