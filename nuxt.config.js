export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/sanity-blocks.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/sanity"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "x9yq2ba7",
    dataset: "blog-test",
    apiVersion: "2022-07-18",
    token:
      "skwRr2zjjv2G2sTDfel4xCt2vrvZpkAOi2FvJU7YhGGEFiCPOXqIOZ27Tu6VNKSJ3FBB3UyFtTkTYnSguNLr3p0qcWafGwFkolqW1wlmiTfcqpMKIYHix6QPGRTOBELzv3mZ1ekouH6hjY3tC6AJKAZyelMrTP4Z90ShNuaCMiNTI1agscFT"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
