import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import About from "./components/About.vue";

import "./styles/globals.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register all the custom global components
    app.component("About", About);
  },
} satisfies Theme;