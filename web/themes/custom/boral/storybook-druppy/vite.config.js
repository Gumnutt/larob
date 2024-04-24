import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig-drupal'
import { join } from 'node:path'

export default defineConfig({
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  plugins: [
    twig({
      namespaces: {
        storybook: join(__dirname, './../components'),
      },
      framework: 'html',
    }),
  ],
})
