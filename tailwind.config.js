/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/Navbar/*.{js,ts,jsx,tsx}",
    "./src/components/Carousel/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",

    flowbite.content(),
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '950',
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
  
}