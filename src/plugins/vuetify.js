// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    primary: "#494E6B",
    secondary: "#192231",
    accent: "#985E6D",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    detail: "#98878F",
    text: "#F5F5F5",
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
