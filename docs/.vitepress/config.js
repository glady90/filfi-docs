export default {
  title: "Filfi",
  description: "filfi description",

  themeConfig: {
    siteTitle: "Filfi",
    // logo: "/logo-core.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/orgs/filfi" },
    ],

    nav: [{ text: "Guide", link: "/guide/about-filfi" }],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "About filfi", link: "/guide/about-filfi" },
        ],
      },
    ],

    footer: {
      message:
        "footer message",
      copyright:
        'Copyright © 2022-present <a href="https://github.com/filfi">Filfi</a>',
    },
  },
};
