/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'piettra-tw': {
          100: '#f2ebf0',
          200: '#dfcad5',
          300: '#cba8ba',
          400: '#b6869f',
          500: '#a03340',
          600: '#8a022e',
          700: '#72011c',
          800: '#5b000a',
          900: '#470008',
        },
        'piettra': {
          100: '#a03340',
          200: '#8a022e',
          300: '#72011c',
          400: '#5b000a',
          500: '#6D011E',
          600: '#3D0200',
          700: '#330200',
          800: '#25000A',
          900: '#1D0008',
          highlight: '#E5A62F'
        } 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
