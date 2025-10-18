import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            remotes: {
                remote_vue: "http://localhost:4173/assets/remoteEntry.js"
            },
            shared: ["react", "react-dom"]
        })
    ],
    build: {
        target: "esnext",
        modulePreload: false,
        minify: false
    },
    server: {
        port: 5173,
        origin: 'http://localhost:5173',
    }
});
