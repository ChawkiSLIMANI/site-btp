export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#D4AF37', // Gold Standard
          light: '#FCD34D',   // Amber Highlight
          dark: '#997B28',    // Deep Gold
          rich: '#B4922B',    // Metallic
        },
        dark: {
          DEFAULT: '#0A0A0A', // Rich Black
          lighter: '#1A1A1A', // Card BG
        }
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FCD34D 0%, #D4AF37 50%, #B4922B 100%)',
        'gradient-dark': 'radial-gradient(circle at center, #1A1A1A 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
};