/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c5ce7',
          light: '#a29bfe',
          dark: '#5849be',
        },
        accent: {
          DEFAULT: '#fd79a8',
          light: '#ffadd8',
          dark: '#e84393',
        },
        background: {
          DEFAULT: '#0f0f1e',
          light: '#1a1a2e',
          card: '#1e1e2e',
        },
        text: {
          primary: '#f5f6fa',
          secondary: '#a4b0be',
          muted: '#747d8c',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Poppins', 'sans-serif'],
        display: ['B Yekan', 'Vazirmatn', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.png')",
        'sakura-pattern': "url('/images/sakura-pattern.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 92, 231, 0.3)',
        'glow-lg': '0 0 40px rgba(108, 92, 231, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
