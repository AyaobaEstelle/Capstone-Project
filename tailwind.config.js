/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#141414',
      'text': '#E4E3E3',
      neutral: {
      '100': '#EDF2F7',
      '200': '#E2E9F0',
      '300': '#CBD6E0',
      '400': '#A0B1C0',
      '500': '#5C6F7F',
      '600': '#2E4457',
      '700': '#1E3448',
      '800': '#112232',
      '900': '#071827',
      primary: {
        '400': 'rgba(0, 90, 226, 0.5)',
        '500': 'rgba(0, 90, 226, 0.6)',
        '600': 'rgba(0, 90, 226, 0.7);',
        '700': 'rgba(0, 90, 226, 0.8)',
        '800': 'rgba(0, 90, 226, 0.9)',
        '900': 'rgba(0, 90, 226, 1)',
      }

      }
      
    },
    extend: {},
  },
  plugins: [],
}
