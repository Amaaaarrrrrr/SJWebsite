
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          navyBlue: "#003366",
          deepGreen: "#005F56",
          teal: "#008080",
          lightGray: "#F5F5F5",
          gold: "#FFD700",
        },
      },
    },
    plugins: [],
  }
  