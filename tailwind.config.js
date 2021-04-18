module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          100: "#66CD00",
        },
        blue: {
          100: "#4c4cff",
        },
        red: {
          100: "#ff4c4c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
