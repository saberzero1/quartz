/** @type {import('tailwindcss').Config} */
export default {
  content: ["./quartz/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "var-light": "var(--light)",
        "var-lightgray": "var(--lightgray)",
        "var-gray": "var(--gray)",
        "var-darkgray": "var(--darkgray)",
        "var-dark": "var(--dark)",
        "var-secondary": "var(--secondary)",
        "var-tertiary": "var(--tertiary)",
        "var-highlight": "var(--highlight)",
        "shiki-bg": "var(--shiki-color-background)",
        "shiki-text": "var(--shiki-color-text)"
      },
    },
  },
  darkMode: ["media","[saved-theme='dark']"],
  plugins: [],
}

