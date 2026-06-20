/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:         '#111827',
        'ink-soft':  '#1F2937',
        paper:       '#F7F5F2',
        'paper-warm':'#EFECEA',
        'paper-mid': '#E5E2DE',
        muted:       '#6B7280',
        'muted-light':'#C0C0C0',
        accent:      '#C8A96B',
        'accent-dark':'#A8894B',
        teal:        '#1DAFA5',
        'teal-dark': '#178F86',
      },
      fontFamily: {
        sans:    ['Heebo', 'sans-serif'],
        display: ['Heebo', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem,10vw,9rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.8rem,6vw,5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem,4vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fadeIn 1.2s ease both',
      },
    },
  },
  plugins: [],
}
