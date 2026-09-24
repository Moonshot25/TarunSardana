/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        purple: {
          primary: "oklch(var(--purple-primary) / <alpha-value>)",
          accent: "oklch(var(--purple-accent) / <alpha-value>)",
          glow: "oklch(var(--purple-glow) / <alpha-value>)",
          deep: "oklch(var(--purple-deep) / <alpha-value>)",
        },
        surface: {
          1: "oklch(var(--surface-1) / <alpha-value>)",
          2: "oklch(var(--surface-2) / <alpha-value>)",
          3: "oklch(var(--surface-3) / <alpha-value>)",
          4: "oklch(var(--surface-4) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Satoshi'", "'Plus Jakarta Sans'", "sans-serif"],
        sans: ["'Satoshi'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-primary": "0 0 24px oklch(0.45 0.28 300 / 0.5), 0 0 60px oklch(0.45 0.28 300 / 0.2)",
        "glow-accent": "0 0 24px oklch(0.65 0.28 320 / 0.5), 0 0 60px oklch(0.65 0.28 320 / 0.2)",
        "card-purple": "0 4px 40px oklch(0.45 0.28 300 / 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
