import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: [
    join(currentDir, './assets/tailwind.css')
  ],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath:join(currentDir, './tailwind.config')
  }
})
