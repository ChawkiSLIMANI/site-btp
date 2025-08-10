export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0E7490',
          dark: '#0C4A6E',
        },
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [],
};