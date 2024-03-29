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
        // vlGreen: "#e1e8d9",
        // lGreen: "#c8d5b9",
        // pale: "#fefae0",
        // tan: "#faedcd",
        // lBrown: "#d4a373",
        vlGreen: "#e1e8d9",
        lGreen: "rgb(16 185 129)",
        pale: "#f28482",
        tan: "#f28482",
        lBrown: "#f28482",
      },
    },
  },
  plugins: [],
};

// why overriding default colorsr? this is a problem
