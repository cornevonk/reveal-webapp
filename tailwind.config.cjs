const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        emerald: colors.emerald,
        violet: colors.violet,
        purple: "#6d28d9",
        lime: "#84cc16",
        fuchsia: "#d946ef",
        midnight: "#0f172a",
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", "sans-serif"],
        display: ["PoppinsVariable", "sans-serif"],
      },
      backgroundImage: {
        "gradient-diagonal": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 10px rgba(139, 92, 246, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backdropBrightness: {
        110: "1.10",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
