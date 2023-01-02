// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    primary: "#30475E",
    secondary: "#222831",
    accent: "#F05454",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    detail: "#DDDDDD",
    text: "#DDDDDD",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    }
  },
});
