// tailwind.config.js
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Thêm bảng màu blue vì nó không được bao gồm mặc định trong Tailwind v4
        blue: colors.blue,
        gray: colors.gray,
        red: colors.red,
        green: colors.green,
        yellow: colors.yellow,
        purple: colors.purple,
        pink: colors.pink,
        orange: colors.orange,
        // Màu tùy chỉnh của bạn
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c0e0ff',
          300: '#80c0ff',
          400: '#4a90e2', // Màu primary chính
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
    keyframes: {
      slideDown: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
    animation: {
      slideDown: 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    transitionProperty: {
      height: 'height',
      spacing: 'margin, padding',
      width: 'width',
    },
    transitionDuration: {
      400: '400ms',
    },
    transitionTimingFunction: {
      'out-cubic': 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [],
}
