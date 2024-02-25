import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import About from "./components/About.vue";
import Gallery from "./components/Gallery.vue";
import BlogHome from "./components/BlogHome.vue";
import Tags from "./components/Tags.vue";

import "./styles/globals.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register all the custom global components
    app.component("About", About);
    app.component("Gallery", Gallery);
    app.component("BlogHome", BlogHome);
    app.component("Tags", Tags);
  },
} satisfies Theme;
