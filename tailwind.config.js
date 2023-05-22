/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(180deg, rgba(13, 16, 24, 0) 0%, #0D1018 69.91%)"
      },
      colors: {
        "primary-blue": '#0B1A38',
        "secondary-blue": "#142B5A",
        "light-blue": "#1F3C7B",
        "text-white": "#EEEEFF",
        "primary-green": "#A4FFC5",
        "secondary-green": "#70B888",
        "primary-gray": "#2B3E64",
        "secondary-gray": "#567499",
        "footer-background": "#000000"
      },
      fontFamily: {
        "primary": ["Mulish", "sans-serif"],
        "secondary": ["Just Me Again Down Here", "sans-serif"]
      },
      fontWeight: {
        "normal": 400,
        "medium": 500,
        "bold": 700,
        "extrabold": 800
      }
    },
  },
  plugins: [],
};
