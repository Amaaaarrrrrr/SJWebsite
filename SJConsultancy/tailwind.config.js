
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
          white: "#FFFFFF",
          gray: {
            100: "#F7FAFC",
            200: "#EDF2F7",
            300: "#E2E8F0",
            400: "#CBD5E0",
            500: "#A0AEC0",
            600: "#718096",
            700: "#4A5568",
            800: "#2D3748",
            900: "#1A202C",
          },
          black: "#000000",
        },
      },
    },
    plugins: [],
  }
  