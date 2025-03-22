/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6E46D4",
        secondary: "#4c1d95",
        background: "#f5f3ff",
        text: {
          header: "#1C193F",
          body: "#424058",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        section: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        subsection: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      spacing: {
        section: "5rem",
        component: "2.5rem",
      },
      borderRadius: {
        card: "1rem",
        button: "0.5rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(167, 139, 250, 0.1), 0 2px 4px -1px rgba(167, 139, 250, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom right, #f5f3ff, #ede9fe)",
      },
    },
  },
  plugins: [],
};
