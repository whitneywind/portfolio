/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0.5rem 0.5rem black",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        vlGreen: "rgb(236 253 245)",
        lGreen: "#ADD8E6",
        pale: "#90EE90",
        tan: "#00008B",
        lBrown: "#A52A2A",
        oceanBlue: "#0066CC",
        lightGreen: "#90EE90",
        lightBlue: "#ADD8E6",
        lightGray: "#D3D3D3",
        darkGray: "#808080",
        mapRed: "#ffb3b3",
        paleYellow: "#fff5d9",
        scrub: "#b8d29f",
        primaryRoads: "#ffb3b3",
      },
    },
  },
  plugins: [],
};
