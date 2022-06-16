module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/main/**/*.{ts,tsx,js,jsx}",
    "./src/layout/**/*.{ts,tsx,js,jsx}",
    "./src/main/**/*.{ts,tsx,js,jsx}",
    "./src/battle/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
