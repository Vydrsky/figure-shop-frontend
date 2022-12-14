// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const mainTheme = {
  dark: false,
  colors: {
    primary: "#0F1626",
    secondary: "#0A0E18",
    accent: "#FF533D",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    detail: "#AB987A",
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
