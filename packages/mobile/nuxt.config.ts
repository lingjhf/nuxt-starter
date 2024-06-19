import { PostcssPxToRem } from '@papaya-app/postcss-px-to-rem'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      ],
    },
  },
  vite:{
    css:{
      postcss: {
        plugins: [
          PostcssPxToRem({
            baseFontSize: 18,
          }),
        ],
      },
    }
  }
})
