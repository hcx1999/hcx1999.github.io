import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",  //This is File "README"
    // {
    //   text: "关于本站",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    // "intro",  //This is File "About"
  ],
});
