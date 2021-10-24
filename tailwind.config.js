module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.tsx",
    "./src/**/*.ts"
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
