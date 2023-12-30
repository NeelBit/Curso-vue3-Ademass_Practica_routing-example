import {
    fileURLToPath,
    URL
} from 'node:url'

import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    /* IMPORTACION para variables generales scss */
    css: {
        preprocessorOptions: {
            scss: { // @ alias que indica el src
                additionalData: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_nav.scss";
                    @import "@/scss/_animaciones.scss";
                    @import "@/scss/_mixins.scss";

                `
            }
        }
    }
})