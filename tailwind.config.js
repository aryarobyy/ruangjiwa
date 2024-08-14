/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
