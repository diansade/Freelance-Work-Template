/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#171412',
        ember: '#e85d2a',
        flame: '#c83d1b',
        cream: '#fff7ed',
        linen: '#f8efe2',
        smoke: '#2a2421',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(232, 93, 42, 0.24)',
        soft: '0 18px 55px rgba(23, 20, 18, 0.12)',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
        },
      },
      animation: {
        floatIn: 'floatIn 800ms ease-out both',
        shimmer: 'shimmer 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
