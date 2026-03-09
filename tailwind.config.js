/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Primary: Electric Blue ────────────────────────── */
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0066ff',   /* Main electric blue */
          600: '#004ecc',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        /* ── Neutrals: Slate/Blue-Grey ─────────────────────── */
        space: {
          50: '#f8fafc',   /* Surface bg */
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',   /* muted text */
          600: '#475569',   /* secondary text */
          700: '#334155',
          800: '#1e293b',   /* card/header text */
          900: '#05183a',   /* primary text / dark navy */
        },
        /* ── Accent: Neon Cyan ────────────────────────────── */
        accent: {
          50: '#f0fdff',
          100: '#e0faff',
          200: '#bdf5ff',
          300: '#82efff',
          400: '#33d3ff',
          500: '#00c8ff',   /* Main accent */
          600: '#0099cc',
          700: '#007ca3',
          800: '#006180',
          900: '#00526b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066ff 0%, #3385ff 50%, #00c8ff 100%)',
        'gradient-hero': 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        'gradient-glow': 'linear-gradient(135deg, #0066ff, #00c8ff)',
        'gradient-btn': 'linear-gradient(135deg, #1a5fff 0%, #4488ff 100%)',
        'gradient-text': 'linear-gradient(135deg, #05183a 0%, #0066ff 100%)',
      },
      boxShadow: {
        'glow-primary': '0 10px 40px rgba(0, 102, 255, 0.15)',
        'glow-cyan': '0 10px 40px rgba(0, 200, 255, 0.15)',
        'glow-purple': '0 10px 40px rgba(107, 47, 255, 0.15)',
        'card-dark': '0 4px 20px rgba(5, 24, 58, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spark': 'spark 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 95, 255, 0.4)' },
          '50%': { boxShadow: '0 0 55px rgba(26, 95, 255, 0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spark: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}