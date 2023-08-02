/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    container: {
      padding: {
        DEFAULT: "1.2rem",
        sm: "1.2rem",
        md: "1.2rem",
        lg: "1.2rem",
        xl: "1.2rem"
      },
      center: true
    },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          color: theme("colors.green.800"),
          a: {
            color: theme("colors.blue.700"),
            "&:hover": {
              color: theme("colors.blue.500")
            }
          },
          p: {
            "background-color": theme("colors.yellow.600"),
            "border-radius": ".25rem",
            border: "1px red solid",
            "box-shadow": "0 2px 4px rgba(0,0,0,0.2)"
          }
        }
      },
      invert: {
        css: {
          color: theme("colors.green.800"),
          a: {
            color: theme("colors.red.700"),
            "&:hover": {
              color: theme("colors.red.300")
            }
          },
          p: {
            "background-color": theme("colors.indigo.200"),
            "border-radius": ".25rem",
            "box-shadow": "0 2px 4px rgba(0,0,0,0.2)"
          }
        }
      },
      sm: {},
      lg: {},
      xl: {},
      cs: {}
    }),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "app-sidebar":
          "linear-gradient(138.52deg, #F5F7FF 1.77%, #EEF0FF 1.77%, #F3F1FC 64.79%, #FFF2F9 118.87%);"
      },
      boxShadow: {
        cs: "0px 0px 22.4301px -4.72213px rgba(0, 37, 131, 0.2)",
        light: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      },
      keyframes: {
        "logo-slider": {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        }
      },
      animation: {
        "logo-slider": "logo-slider 50s infinite linear"
      },
      colors: {
        primary: "#34345F",
        seconday: "#34345F",
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b"
        }
      },
      fontSize: {
        cs: ["32px", { letterSpacing: "-0.02em", lineHeight: "40px" }]
      },
      fontFamily: {
        satoshi: "Satoshi, sans-serif",
        inter: "Inter, sans-serif"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "base" }),
    require("@tailwindcss/typography")
  ],
  variants: {
    extend: {
      typography: ["cs"]
    }
  }
};
