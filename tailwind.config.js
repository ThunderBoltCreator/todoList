import animationDelay from "tailwindcss-animation-delay"
import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fade: "fade 1s linear",
      },
      animationDelay: {
        2100: "2100ms",
      },
      flex: {
        todos: "0 1 23%",
      },
      colors: {
        todo1: "#F6A89E",
        todo2: "#8CD4CB",
        todo3: "#F4D799",
        blur: "rgba(164,103,234, 0.4)",
      },
      minHeight: {
        todos: "300px",
      },
      transitionDuration: {
        common: "300ms",
      },
      transitionProperty: {
        w: "width",
      },
      backgroundColor: {
        loader: "rgba(255,255,255, 0.9)",
      },
      backgroundImage: {
        "btn-create-todo": "url('/src/shared/images/create_todo.png')",
        "btn-todos-list": "url('/src/shared/images/todos_list.png')",
      },
    },
  },
  plugins: [
    animationDelay,
    plugin(({ addComponents }) => {
      addComponents({
        ".todos-tab": {
          width: "100%",
          transition: "all 0.2s ease",
          "&:hover": {
            width: "110%",
          },
        },
      })
    }),
  ],
}
