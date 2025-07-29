/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#d4af37',
          dark: '#b8860b',
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#e5e5e5',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        background: {
          DEFAULT: '#ffffff',
          off: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '1.5'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}