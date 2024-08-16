// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  routeRules: {
    "/": {
      redirect: "/inbox",
    },
  },
  vite: {
    server: {
      hmr: {
        overlay: false, // Sometimes helps with stability
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            headerBg: '#f6f8fc',
            headerSearch: '#eaf1fb',
            userIcon: '#0097a7',
            mail: '#f2f6fc',
            mailBorder: '#ebeff5',
            composeBtn: '#c2e7ff',
            navbarFocus: '#d3e3fd',
            navbarBg: '#f6f8fc',
            filterBtnFocus: '#0b57d0'
          },
          width: {
            'customXL': '44rem',
          },
        },
      },
    },
  },
})