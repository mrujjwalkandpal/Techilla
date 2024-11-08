/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgcolor': 'linear-gradient(to top right, #0ea5e9, #4f46e5)', // Sky 500 to Indigo 700 gradient
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton SC", "sans-serif"], // Add Poppins and Anton SC to Tailwind's font family
      },
    },
  },
  plugins: [],
}
