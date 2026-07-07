import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cocoa: '#3a2417',
        truffle: '#6d3b21',
        caramel: '#f97316',
        honey: '#fbbf24',
        cream: '#fff8e7',
        linen: '#fffdf8',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(58, 36, 23, 0.12)',
        lift: '0 14px 34px rgba(249, 115, 22, 0.18)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
