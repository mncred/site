import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  "/launcher/",
  "/servers/",
  "/blog/",
  {
    text: "Сообщество",
    icon: "tabler:video",
    children: [
      {
        text: "Сообщество VK",
        icon: "uil:vk",
        link: "https://vk.com/mncred"
      },
      {
        text: "Видео & Стримы",
        icon: "tabler:video-filled",
        link: "https://vkvideo.ru/@mncred"
      }
    ],
  },
  // "/demo/",
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
