/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/views/**/*.pug", "./public/styles/inline/**/*.svg"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
