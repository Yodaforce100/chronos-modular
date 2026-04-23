/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Marcellus', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F2F1EE',
        foreground: '#3A4A5A',
        'body-text': '#4A5B6B',
        'brand-navy': '#243E6B',
        'brand-coral': '#D88C7A',
        'brand-accent': '#A9C3D6',
        'brand-wave': '#6F98C2',
        'brand-divider': '#E7DED2',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#3A4A5A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#3A4A5A',
        },
        primary: {
          DEFAULT: '#D88C7A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E7DED2',
          foreground: '#3A4A5A',
        },
        muted: {
          DEFAULT: '#EDE8E1',
          foreground: '#4A5B6B',
        },
        accent: {
          DEFAULT: '#A9C3D6',
          foreground: '#243E6B',
        },
        destructive: {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(0 0% 98%)',
        },
        border: '#E7DED2',
        input: '#E7DED2',
        ring: '#D88C7A',
        chart: {
          '1': '#D88C7A',
          '2': '#A9C3D6',
          '3': '#243E6B',
          '4': '#6F98C2',
          '5': '#E7DED2',
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#3A4A5A',
          primary: '#D88C7A',
          'primary-foreground': '#FFFFFF',
          accent: '#EDE8E1',
          'accent-foreground': '#3A4A5A',
          border: '#E7DED2',
          ring: '#D88C7A',
        },
      },
      borderRadius: {
        lg: '9999px',
        md: '9999px',
        sm: '9999px',
        DEFAULT: '9999px',
        none: '0px',
        'card': '16px',
        'sm-card': '8px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(216,140,122,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(216,140,122,0)' },
        },
        'soundwave': {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'soundwave': 'soundwave 1.2s ease-in-out infinite',
        'float-up': 'float-up 0.7s ease-out both',
      },
      safelist: [
        'bg-[#F2F1EE]', 'text-[#3A4A5A]', 'text-[#4A5B6B]',
        'text-[#243E6B]', 'bg-[#D88C7A]', 'bg-[#A9C3D6]',
        'border-[#E7DED2]', 'text-[#6F98C2]',
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
