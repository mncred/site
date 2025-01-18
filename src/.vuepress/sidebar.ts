import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Лаунчер",
      icon: "laptop-chromebook-outline-rounded",
      prefix: "launcher/",
      link: "launcher/",
      children: "structure",
    },
    {
      text: "Серверы",
      icon: "tabler:server",
      prefix: "servers/",
      link: "servers/",
      children: "structure",
    },
    {
      text: "Справка",
      icon: "material-symbols:help-outline-rounded",
      prefix: "help/",
      link: "help/",
      children: "structure",
    },
    // {
    //   text: "Блог",
    //   icon: "material-symbols:article-outline-rounded",
    //   prefix: "blog/",
    //   link: "blog/",
    //   children: "structure",
    //   collapsible: true,
    // },
    {
      text: "Админ",
      icon: "eos-icons:admin-outlined",
      prefix: "admin/",
      link: "admin/",
    },
    // "portfolio",
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
