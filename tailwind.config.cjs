/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        achira: "#c7881e",
        "achira-light": "#f9e976",
      },
    },
  },
  plugins: [],
};
