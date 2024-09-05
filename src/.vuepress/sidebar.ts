// import { sidebar } from "vuepress-theme-hope";

// export default sidebar({
//   "/": [
//     "",
//     // {
//     //   text: "关于本站",
//     //   icon: "laptop-code",
//     //   prefix: "demo/",
//     //   link: "demo/",
//     //   children: "structure",
//     // },
//     {
//       text: "文章",
//       icon: "book",
//       prefix: "posts/",
//       children: "structure",
//     },
//     "intro",
//     // {
//     //   text: "幻灯片",
//     //   icon: "person-chalkboard",
//     //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
//     // },
//   ],
// });

// docs/.vuepress/config.js
import themeSidebar from 'vuepress-theme-sidebar';

export default  {
  theme: themeSidebar()
  // themeSidebar({ // 这里可以传入官方默认主题的配置项 })
};
