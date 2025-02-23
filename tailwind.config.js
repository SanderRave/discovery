export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "font-safiro",
    "font-safiroBold",
    "font-safiroMedium",
    "font-safiroSemiBold",
  ],
  theme: {
    extend: {
      fontFamily: {
        safiro: ["'Safiro'", "sans-serif"],
        safiroBold: ["'Safiro Bold'", "sans-serif"],
        safiroMedium: ["'Safiro Medium'", "sans-serif"],
        safiroSemiBold: ["'Safiro SemiBold'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
