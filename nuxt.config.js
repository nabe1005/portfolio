export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: "Nabe's Portfolio",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'なべのぽーとふぉりお' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/css/timeline.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
        'nuxt-fontawesome'
    ],
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    fontawesome: {
        imports: [{
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            },
            {
                set: '@fortawesome/free-regular-svg-icons',
                icons: ['far']
            }
        ]
    }
}