// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    primary: "#D7CEC7",
    secondary: "#565656",
    accent: "#76323F",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    detail: "#C09F80",
    text: "#0C0C0C",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
});
