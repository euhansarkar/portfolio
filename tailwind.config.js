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
    ],
  },
  plugins: [require("daisyui")],
};
