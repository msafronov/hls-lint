import { defineConfig, splitVendorChunkPlugin } from 'vite';
import preact from '@preact/preset-vite';

import packageJSON from './package.json';

export default defineConfig({
    plugins: [
        preact(),
        splitVendorChunkPlugin(),
    ],
    build: {
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`,
            manualChunks(id) {
                if (id.includes('node_modules/preact')) {
                    return `preact-${packageJSON.dependencies.preact}`;
                }
            },
          },
        },
      },
});
