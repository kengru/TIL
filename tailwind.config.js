module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#7523e8",
      secondary: "#FAFAFF"
    }),
    extend: {
      colors: {
        "palette-1": "#006d77",
        "palette-2": "#83c5be",
        "palette-3": "#edf6f9",
        "palette-4": "#ffddd2",
        "palette-5": "#e29578"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
