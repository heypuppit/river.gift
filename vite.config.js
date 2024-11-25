import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    root: 'src',
    plugins: [svelte()],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]',
                entryFileNames: 'entries/[name].js'
            }
        }
    }
})