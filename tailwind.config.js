/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ca79ea",

          secondary: "#8c2101",

          accent: "#02725a",

          neutral: "#1F191F",

          "base-100": "#504356",

          info: "#87C7E3",

          success: "#1BC07B",

          warning: "#F09319",

          error: "#E12340",
        },
      },
      {
        darkTheme: {
          primary: "#4ade80",

          secondary: "#6b7280",

          accent: "#065f46",

          neutral: "#3b82f6",

          "base-100": "#504356",

          info: "#be185d",

          success: "#1BC07B",

          warning: "#f97316",

          error: "#E12340",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
