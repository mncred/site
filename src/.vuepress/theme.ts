import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mnc.red",
  favicon: "/favicon.png",

  author: {
    name: "Minecraft RED",
    url: "https://vk.com/mncred",
  },

  logo: "/logo.png",

  // repo: "mncred/site",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "<a href='https://t.me/jkulvich'>Прямая обратная связь</a>",

  displayFooter: true,

  encrypt: {
    config: {
      "/admin/": {
        hint: "Страница с заметками для администрации. Вам точно нужно быть здесь?",
        password: ["mncred"],
      },
    },
  },

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  blog: {
    description: 'Приватные игровые сервера без доната',
    medias: {
      vk: 'https://vk.com/mncred',
      github: 'https://github.com/mncred',
    },
    sidebarDisplay: 'none',
  },

  plugins: {
    slimsearch: {},
    blog: {
      article: '/blog/articles/',
      filter: ({ frontmatter, filePathRelative }) => {
        return /^blog\/articles\//.test(filePathRelative ?? '')
      },
    },

    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.

    // already configured
    comment: {
      provider: "Giscus",
      repo: "mncred/site",
      repoId: "R_kgDONrdKWQ",
      category: "Announcements",
      categoryId: "DIC_kwDONrdKWc4CmE32",
      darkTheme: "dark_dimmed",
      lightTheme: "light",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: 'iconify',
      prefix: "material-symbols:",
    },

    seo: {},

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
