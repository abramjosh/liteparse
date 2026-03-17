export default {
  section: "liteparse",
  label: "LiteParse",
  content: [
    { src: "./docs/src/content/docs/liteparse", dest: "python/liteparse" },
  ],
  sidebar: [{
    label: "LiteParse",
    content: { type: "autogenerate", directory: "python/liteparse", collapsed: true },
  }],
};
