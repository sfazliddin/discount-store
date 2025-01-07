/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        24: "6rem",
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    ("flowbite/plugin"),
  ],
}
