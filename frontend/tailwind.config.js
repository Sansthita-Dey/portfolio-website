/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          surface: '#111827',
          border: '#1F2937',
        },
        light: {
          bg: '#F9FAFB',
          surface: '#FFFFFF',
          border: '#E5E7EB',
        },
        primary: '#6366F1',
        'primary-light': '#4F46E5',
        secondary: '#22D3EE',
        'secondary-light': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366F1, #22D3EE)',
        'gradient-accent-light': 'linear-gradient(135deg, #4F46E5, #06B6D4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 40px rgba(99,102,241,0.18)',
        'glow': '0 0 40px rgba(99,102,241,0.25)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.15)',
      },
    },
  },
  plugins: [],
}
