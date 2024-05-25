/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display, serif"],
        caveat: ["Caveat", "cursive"],
      },
      keyframes: {
        slash: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) rotate(-24deg) scaleY(0)",
          },
          "6%, 13%": {
            transform: "translate(-50%, -50%) rotate(-24deg) scaleY(1)",
          },
          "16.6%": {
            transform: "translate(-50%, -50%) rotate(-24deg) scaleY(0)",
          },
        },
        textLeft: {
          "0%": { transform: "translateX(100%)" },
          "10%, 58%": { transform: "translateX(0)" },
          "70%, 100%": { transform: "translateX(-200%)" },
        },
        textRight: {
          "0%": { transform: "translateX(-200%)" },
          "10%, 58%": { transform: "translateX(-100%)" },
          "70%, 100%": { transform: "translateX(-300%)" },
        },
        sideTop: {
          "0%, 14%, 65%, 100%": { transform: "translateX(-101%)" },
          "24%, 55%": { transform: "translateX(0)" },
        },
        sideRight: {
          "0%, 14%, 23%, 72%, 100%": { transform: "translateY(-101%)" },
          "30%, 62%": { transform: "translateY(0)" },
        },
        sideBottom: {
          "0%, 14%, 24%, 28%, 79%, 100%": { transform: "translateX(101%)" },
          "37%, 70%": { transform: "translateX(0)" },
        },
        sideLeft: {
          "0%, 14%, 24%, 34%, 35%, 86%, 100%": {
            transform: "translateY(101%)",
          },
          "44%, 79%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slash: "slash 6s ease-in infinite",
        textLeft: "textLeft 6s ease-in-out infinite",
        textRight: "textRight 6s ease-in-out infinite",
        sideTop: "sideTop 6s ease infinite",
        sideRight: "sideRight 6s ease infinite",
        sideBottom: "sideBottom 6s ease infinite",
        sideLeft: "sideLeft 6s ease infinite",
      },
    },
  },
  plugins: [],
};
