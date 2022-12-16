/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    // safelist: [
    //   'from-green-400',
    //   'from-blue-400',
    //   'from-gray-400',
    //   'from-yellow-400',
    //   'to-gray-700',
    //   'to-blue-700',
    //   'to-green-700',
    //   'to-yellow-700',
    // ],
    safelist: [
      {
        pattern: /^bg-/,
      },
      {
        pattern: /^from-/
      },
      {
        pattern: /^to-/
      }
    ],
  },
  // purge: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
