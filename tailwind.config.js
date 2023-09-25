export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
