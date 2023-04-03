import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  alias: {
    'utils': join(currentDir, './utils'),
    'types': join(currentDir, './types')
  },
  app: {
    head: {
      title: 'DEV BASE LAYER',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
    }
  },
  runtimeConfig: {
    public: {
      APP_NEW_USER_TOKEN: 'A7yye1YWoUpwoax_VAYJasqBySojG9rs',
      API_BASE_URL: process.env.API_BASE_URL || 'https://api.xn--80ajbekothchmme5j.xn--p1ai/',
    }
  },
  devServer: {
    port: 5555
  },
  components: [
    {path: join(currentDir, './components'), prefix: 'SP'}
  ],
  css: [
    join(currentDir, './assets/vars.css')
  ],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxt/devtools'],
  tailwindcss: {
    cssPath: join(currentDir, './assets/tailwind.scss'),
    configPath: join(currentDir, './tailwind.config')
  },
  hooks: {
    'pages:extend'(pages) {
      // add a route
      // pages.push({
      //   name: 'index-forms',
      //   path: '/:type(|by-sts|by-vu|by-uin|by-license-plate)',
      //   file: join(currentDir, './pages/index')
      // })
    }
  }
})
