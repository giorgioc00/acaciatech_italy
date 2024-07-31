/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ["ProximaNova-Regular"],
        bold: ["ProximaNova-Bold"],
        medium: ["ProximaNova-Semibold"],
        classic: ['"Playfair Display"', 'serif'],
    },
    textShadow: {
      sm: '1px 1px 2px var(--textShadow1)',
      DEFAULT: '2px 2px 4px --var(textShadow1)',
      lg: '4px 4px 8px var(--textShadow1)',
      xl: '4px 4px 16px var(--textShadow1)',
    },
  },
  container: {
    center: true,
  },
  },
  plugins: []
}
