/** @type {import('tailwindcss').Config} */
const config = {
  mode: "jit",
  content: ["./**/*.pug"],
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

export default config;
