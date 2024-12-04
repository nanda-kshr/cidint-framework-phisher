/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green: {
          400: '#4ade80',
          600: '#16a34a',
          700: '#15803d',
        },
        gray: {
          300: '#d1d5db',
          800: '#1f2937',
          900: '#111827',
        },
        black: {
          DEFAULT: '#000000',
        },
      },
    },
  },
  plugins: [],
}