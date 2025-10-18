import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: "remote_vue",
            filename: "remoteEntry.js",
            exposes: {
                "./VueWidget": "./src/components/VueWidget.vue"
            },
            shared: ["vue"]
        })
    ],
    build: {
        target: "esnext",
        modulePreload: false,
        minify: false
    },
    server: {
        port: 4173,
        origin: "http://localhost:4173",
    }
});
