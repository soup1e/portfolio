/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
      },
      height: {
        Moblie: "70vh",
      },
      keyframes: {
        bob: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(5deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        bobbing: "bob 2s linear",
      },
    },
  },
  plugins: [],
};
