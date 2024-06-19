import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  hooks: {
    'pages:extend'(pages) {
      removePagesMatching(/\.ts$/, pages)
    },
  },
  devServer: {
    host: '127.0.0.1',
  },
})

// 移除路由
function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
  const pagesToRemove = []
  for (const page of pages) {
    if (page.file && pattern.test(page.file)) {
      pagesToRemove.push(page)
    }
    else if (page.children && page.children.length > 0) {
      removePagesMatching(pattern, page.children)
    }
  }
  for (const page of pagesToRemove) {
    pages.splice(pages.indexOf(page), 1)
  }
}
