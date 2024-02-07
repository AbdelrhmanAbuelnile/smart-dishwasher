/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primaryback": "#1E1E1E",
        "secondaryback": "#121212",
        "primary": "#B8ED55",
        "secondary": "#B7B7B7",
        "primaryOrange": "#0F1035",
        "LightGray": "#FAFAFA",
        "darkerGray": "#B8B8B8",
        "darkGray": "#6B6B6B",
        "secondaryDarkLead": "#222C3C",
        "nav": "#121212",
        "secondaryLightLead": "#5DA5B7",
        "secondaryFieldLead": "#303E51",
        "ChartGreen": "#15CAB8",
        "chartRed": "#E2362F",
        "chartOrange": "#FF8548",
        "ChartGray": "#C4DEFF",
        "activeNavIcon": "#1D1D1D",
        "header": "#1E263388"
      },
      screens:{
        "largelaptop": "1400px",
      }
    },
  },
  plugins: [],
}

