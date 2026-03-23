/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f59e0b',
          dim: '#d97706',
          glow: '#f59e0b66'
        },
        whatsapp: '#25d366',
        surface: {
          base: '#fffbeb',
          raw: '#fef3c7',
          elevated: '#ffffff',
          glass: 'rgba(255, 255, 255, 0.8)'
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          muted: '#94a3b8'
        },
        accent: {
          rose: '#fb7185',
          sky: '#38bdf8',
          mint: '#34d399',
          lavender: '#a78bfa'
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
