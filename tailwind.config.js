/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#18ACE8",
        grey: "#606060",
        black: "#111110",
        accent: "#E8F8FF",
        accent2: "#EBD0FF",
        accent3: "#FFF6A4",
        accent4: "#F6F6F6",
        accent5: "#F1F1F1",
        neutral: "#f5f5f5",
        white: "#fff",
        danger: "#E33629",
      },
      screens: {
        xl: "1440px",
        "2xl": "1600px",
      },
    },
    fontFamily: {
      display: ["Darker Grotesque", "sans-serif"],
      secondary: ["Rubik", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["light"],
    base: false,
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
