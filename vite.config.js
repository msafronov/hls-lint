import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import preact from '@preact/preset-vite';

import packageJSON from './package.json';

export default defineConfig({
    plugins: [
        preact(),
        splitVendorChunkPlugin(),
    ],
    resolve: {
        alias: {
            '@/app': path.resolve(__dirname, './src/app'),
            '@/ui': path.resolve(__dirname, './src/ui'),
        },
    },
    build: {
        cssMinify: true,
        
        rollupOptions: {
              output: {
                  entryFileNames: `assets/[name]-${packageJSON.version}.js`,
                  chunkFileNames: `assets/[name]-${packageJSON.version}.js`,
                  assetFileNames: `assets/[name]-${packageJSON.version}.[ext]`,
                  manualChunks(id) {
                      if (id.includes('node_modules/preact')) {
                          return `preact-${packageJSON.dependencies.preact}`;
                      }
                  },
              },
          },
      },
});
