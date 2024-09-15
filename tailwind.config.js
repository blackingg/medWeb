/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground: "url('../public/heroBackground.jpg')",
      },
    },
  },
  plugins: [],
};
