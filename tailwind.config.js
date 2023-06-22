/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [ function ({ addComponents }) {
      const text = {
        ".font": {
          color: '#ffffff',
          fontWeight:'bold',
          
        },
        
      };
      addComponents(text);
    },],
}

