/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9994DB", 
          "secondary": "#6F58C9", 
          "accent": "#03B5AA", 
          "neutral": "#110B11", 
          "base-100": "#FFFFFF", 
          "info": "#4B6395", 
          "success": "#3DA35D", 
          "warning": "#F7B32B", 
          "error": "#FE4A49" 
        }
      }
    ], 
    extend: {},
  },
  plugins: [require("daisyui")],
} 