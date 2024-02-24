import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./styles/globals.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register all the custom global components
  },
} satisfies Theme;
