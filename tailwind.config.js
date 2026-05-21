/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1714',
        'ink-deep': '#0F0D0B',
        cream: '#F4EFE6',
        'cream-soft': '#EFE8DB',
        gold: '#C9A961',
        'gold-soft': '#E8D4A8',
        rose: '#E9C9C2',
        mute: '#9A8F84',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        display: ['Italiana', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'wider-3': '0.28em',
      },
    },
  },
  plugins: [],
}
