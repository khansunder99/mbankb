/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {

        slideright: {
          '0%': { transfrom: 'translateX(-100%)', opacity: '0%' },
          '100%': { transfrom: 'translateX(0%)', opacity: '100%' },
        },

        slideleft: {
          '0%': { transfrom: 'translateX(100%)', opacity: '0%' },
          '100%': { transfrom: 'translateX(0%)', opacity: '100%' },
        },
      },

      animation: {
        'slideright': 'slide 1s linear ',
        'slideleft': 'slide 1s linear ',
      },
    },
  },
  plugins: [],
}

