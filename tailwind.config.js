/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAFAF9',
          dark: '#0B0C0E',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#151619',
        },
        ink: {
          DEFAULT: '#14151A',
          dark: '#F2F2F0',
        },
        muted: {
          DEFAULT: '#6B6D73',
          dark: '#8B8D93',
        },
        line: {
          DEFAULT: '#E7E7E5',
          dark: '#232428',
        },
        accent: {
          DEFAULT: '#3D6BEF',
          dark: '#5B8CFF',
        },
        accent2: {
          DEFAULT: '#0EA5A5',
          dark: '#2DD4BF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 17, 20, 0.04)',
        'card-hover': '0 12px 32px -12px rgba(16, 17, 20, 0.18)',
        'card-hover-dark': '0 12px 32px -12px rgba(0, 0, 0, 0.55)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
