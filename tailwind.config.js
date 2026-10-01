/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Solway', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        paper: '#FFF7EB',
        card: '#F4F0E6',
        ink: '#222222',
        mute: '#6b6357',
        sticky: {
          cream: '#FAEFCC',
          aqua: '#CCF9FA',
          pink: '#FFBFDA',
          green: '#DCFCCC',
          beige: '#F4F0E6',
          violet: '#CDA3FF',
        },
        accent: '#8774FF',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(60,50,30,0.12)',
        note: '0 6px 16px rgba(60,50,30,0.18)',
      },
    },
  },
  plugins: [],
}
