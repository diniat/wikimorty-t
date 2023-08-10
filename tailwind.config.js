/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#282c34",
        "ram-black": "#181419",
        "gray-1": "#dddddd",
        "gray-2": "#cacaca",
        "black-ish": "#2f362f",
        "rm-green": "#6bac70",
        gg: "#dfefd7",
      },
    },
  },
  plugins: [],
};
