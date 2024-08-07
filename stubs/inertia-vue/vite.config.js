import { defineConfig } from "vite";
import { quasar } from "@quasar/vite-plugin";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
            ],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            // autoImportComponentCase: 'kebab',
            // devTreeshaking: true,
            // sassVariables: "resources/sass/quasar.variables.scss",
            // runMode: "ssr-client",
        }),
    ],
});
