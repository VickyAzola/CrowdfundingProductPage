/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ModerateCyan": "hsl(176, 50%, 47%)",
        "DarkCyan": "hsl(176, 72%, 28%)",
        "DarkGray": "hsl(0, 0%, 48%)"
      }
    },
  },
  plugins: [],
}

