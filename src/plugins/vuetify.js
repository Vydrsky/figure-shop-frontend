// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    primary: "#3F4E4F",
    secondary: "#2C3639",
    accent: "#A27B5C",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    detail: "#A27B5C",
    text: "#DCD7C9",
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
