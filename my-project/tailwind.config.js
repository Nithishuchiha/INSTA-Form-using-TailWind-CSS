/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        loginButton: "#4cb5f9",
        darkBlue: "#385185",
        signUp: "#42bafa",
      },
    },
  },
  plugins: [],
};
