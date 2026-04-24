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
        foreground: '#001c5f',
        'body-text': '#334455',
        'brand-navy': '#001c5f',
        'brand-blue': '#669eea',
        'brand-gold': '#D9B86A',
        'brand-divider': '#E8E8E8',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#3A4A5A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#3A4A5A',
        },
        primary: {
          DEFAULT: '#D9B86A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#669eea',
          foreground: '#001c5f',
        },
        muted: {
          DEFAULT: '#F2F1EE',
          foreground: '#334455',
        },
        accent: {
          DEFAULT: '#669eea',
          foreground: '#001c5f',
        },
        destructive: {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(0 0% 98%)',
        },
        border: '#E8E8E8',
        input: '#F2F1EE',
        ring: '#669eea',
        chart: {
          '1': '#D9B86A',
          '2': '#669eea',
          '3': '#001c5f',
          '4': '#669eea',
          '5': '#E8E8E8',
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#001c5f',
          primary: '#D9B86A',
          'primary-foreground': '#FFFFFF',
          accent: '#F2F1EE',
          'accent-foreground': '#001c5f',
          border: '#E8E8E8',
          ring: '#669eea',
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
        'bg-[#F2F1EE]', 'text-[#001c5f]', 'text-[#334455]',
        'text-[#669eea]', 'bg-[#D9B86A]', 'bg-[#669eea]',
        'border-[#E8E8E8]', 'text-[#669eea]',
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
