/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{twig,js,pcss}", "./templates/**/*.twig", "./components/**/*.{twig,js,pcss}"],
  theme: {
    extend: {
      colors: {
        boral: {
          green: {
            DEFAULT: "#00A94F",
            20: "#CCEEDC",
            40: "#99DDB9",
            60: "#66CB95",
            80: "#33BA72",
          },
          lime: {
            DEFAULT: "#A6CE3A",
            20: "#EDF5D8",
            40: "#DBEBB0",
            60: "#CAE289",
            80: "#B8D861",
          },
          yellow: {
            DEFAULT: "#FFDE00",
            20: "#FFF8CC",
            40: "#FFF299",
            60: "#FFEB66",
            80: "#FFE533",
          },
          navy: "#002A41",
          charcoal: "#5A666F",
          grey: "#E2E6E8",
        },
      },
    },
  },
  plugins: [],
}
