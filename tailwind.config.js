
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  safelist: [
    {
      pattern: /border-(sky|pink|purple)-500\/40/,
    },
    {
      pattern: /text-(sky|pink|purple)-500/,
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/20/,
    },
    {
      pattern: /border-(sky|pink|purple)-500\/20/,
      variants: ['hover'],
    },
    {
      pattern: /bg-(sky|pink|purple)-500\/5/,
      variants: ['hover'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      // colors: {
      //   primary: {
      //     ...colors.orange,
      //     DEFAULT: colors.orange['600'],
      //   },
      // },
      zIndex: {
        60: '60',
        70: '70',
      },
      keyframes: {
        load: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary": "#f9fafb",
        "secondary": "#f1f5f9",
        "buttonBgPrimary": "#059669",
        "buttonBgPrimaryHover": "#047857",
      },
      ringColor: {
        "primaryHover": "#fbbf24"
      },
      textColor: {
        "dark": "#1f2937",
        "light": "#6b7280"
      }
    },
  },
  plugins: [],
};
