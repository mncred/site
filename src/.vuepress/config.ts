import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "ru-RU",
  title: "Minecraft RED",
  description: "Проект игровых серверов Minecraft",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
