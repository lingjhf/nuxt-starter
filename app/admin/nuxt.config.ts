// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../../packages/base', '../../packages/mobile'],
  modules: ['@pinia/nuxt'],
  devServer: {
    host: '127.0.0.1'
  }
})
