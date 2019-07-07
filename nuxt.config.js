const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const base = process.env.NODE_ENV.trim() === 'development'?'':'/green-map-taiwan-new/';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    height: '5px'
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
    { src: '~plugins/leaflet.js', ssr: false },
    { src: '~plugins/vue-lazy-render.js', ssr: false },
    { src: '~plugins/vue-scroll.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
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
    base: base
  },
  configureWebpack: config => { config.output.globalObject = "this"; }
}
