// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: [100, 300, 400, 500, 700, 900],
      Poppins:[100,300,400,600,900],
      Roboto:[100,300,400,600,900]  // Adicione os pesos que precisar
    },
  },
  compatibilityDate: "2024-10-22"
})