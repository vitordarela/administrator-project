/*
* NUXT CONFIG
*
* This is the main and unique config file of Zoome Web project, 
* all things (Plugins, Loads, Param...) must be centralized here.  
*
* Caution => CAN NOT BE REPEATED ATTRIBUTES (css / head / modules)
*
*/
module.exports = {
  /*
  * Headers of the page
  */
  head: {
    title: 'VG - Administrator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VG - Administrator' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  /**
  * SASS/SCSS setting module
  */  
  modules: [
    'nuxt-sass-resources-loader',
    'bootstrap-vue/nuxt'
  ],

  /**
  * SASS/SCSS setting path
  */    
  sassResources: [
    '@/assets/settings.scss',
    '@/assets/global.scss',
  ],

  /**
  * CSS Global loads
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/reset.css',
    'swiper/dist/css/swiper.css',
  ],

  /**
  *  Build configs
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
    }
  },

  /**
  * Plugins exports
  */  
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/nuxt-swiper-plugin',
    { src: '~/plugins/swiper.min.js', ssr: false }
  ],    

}