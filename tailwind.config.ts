import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        surface: '#111827',
        accent: '#D97706',
        'accent-hover': '#F59E0B',
        'text-primary': '#F5F0E8',
        muted: '#6B7280',
        divider: '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      borderRadius: {
        btn: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
