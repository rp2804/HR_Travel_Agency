/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F2439',
          'navy-dark': '#091826',
          'navy-light': '#1A3757',
          accent: '#E07A2B',
          'accent-hover': '#C8661B',
          'accent-light': '#FFF7ED',
          teal: '#0D9488',
          'teal-light': '#F0FDFA',
          sand: '#FAF8F5',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(15, 36, 57, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 36, 57, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(15, 36, 57, 0.14)',
        'floating': '0 20px 40px -10px rgba(15, 36, 57, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.08)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
      },
    },
  },
  plugins: [],
}
