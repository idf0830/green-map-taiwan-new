const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const base = process.env.NODE_ENV.trim() === 'development'?'':'/green-map-taiwan-new/';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "台灣零廢棄地圖",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#44AD47',
    height: '3px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/vuetify',
    // { src: '~/plugins/vue-lazyload', ssr: true },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/vue-carousel.js', ssr: false },
    { src: '~plugins/leaflet.js', ssr: false },
    { src: '~plugins/vue-scroll.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 0,
          md: 1250,
          lg: Infinity
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    // plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  router: {
    base: base,
    prefetchLinks: false,
    scrollBehavior: async (to, from, savedPosition) => {
      if (!to.hash && savedPosition) {
        return savedPosition
      }

      await new Promise(resolve => setTimeout(resolve, 200));

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }
      const offset = window.innerWidth>1250?60:115;

      if(to.name==='about' && from.name==='about'
        && to.hash && from.hash
      ){
        const btn = document.querySelector("#mobile-button");
        if(btn) btn.click();
      }
      if (to.hash) {
        let el = await findEl(to.hash);

        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop - offset)
        }
      }

      return { x: 0, y: 0 }
    }
  },
  configureWebpack: config => { config.output.globalObject = "this"; }
}
