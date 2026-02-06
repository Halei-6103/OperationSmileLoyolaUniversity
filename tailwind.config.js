/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'loyola-maroon': '#5A0722',
        'loyola-gold': '#EAAA00',
        'os-blue': '#005DAA',
        'os-red': '#D7282F',
        'section-alt': '#F7F7F7',
      },
      fontFamily: {
        heading: ['Oswald', 'Arial Narrow', 'sans-serif'],
        body: ['system-ui', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['28px', { lineHeight: '32px', fontWeight: '600' }],
        'h2-mobile': ['22px', { lineHeight: '26px', fontWeight: '600' }],
        'body-mobile': ['16px', { lineHeight: '24px' }],
        'impact': ['24px', { lineHeight: '28px', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
