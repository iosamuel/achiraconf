/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        achira: {
          DEFAULT: "#c7881e",
          light: "#f9e976",
          darklight: "#E7AC2A",
        },
      },
    },
  },
  plugins: [],
};
