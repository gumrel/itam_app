// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,

  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],

  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
