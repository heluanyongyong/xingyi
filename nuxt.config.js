const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'xingyi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins:[
      new webpack.ProvidePlugin({
          '$':'jquery'
      })
    ]
  },
  plugins: [
    {
      src:'~plugins/element-ui',
      ssr: true
    },
    {
      src:'~plugins/vue-map',
      ssr: false
    },
    {
      src:'~plugins/vue-wow',
      ssr: false
    },
    {
      src: '~plugins/vue-swiper',
      ssr: false
    }
  ],
  css: [
    {
      src: '~assets/reset.styl',
      lang: 'styl'
    },
    {
      src:'element-ui/lib/theme-chalk/index.css'
    },
    {
      src:'animate.css'
    },
    {
      src:'swiper/dist/css/swiper.css'
    }
  ]
}

