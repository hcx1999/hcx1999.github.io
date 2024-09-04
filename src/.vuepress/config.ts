import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HCX1999",
  description: "hcx1999 的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
