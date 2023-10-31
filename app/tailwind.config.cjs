/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./views/**/*.pug"],
  theme: {
    extend: {
      animation: {
        toggle: "show ease-in-out duration-300",
      },
      keyframes: {
        show: {
          "100%": { opacity: 1.0, transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
