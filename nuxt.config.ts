import { Configuration } from "@nuxt/types"

const config: Configuration = {
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [
        { src: "~/plugins/window.ts" },
    ],
    buildModules: [
        "@nuxtjs/vuetify",
        "@nuxt/typescript-build",
    ],
}

export default config