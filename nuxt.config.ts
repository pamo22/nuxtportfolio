// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:wght@200;400;700&family=Comfortaa&family=Montserrat&display=swap"
        }
      ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
