import { defineConfig } from "vite"
import twig from "vite-plugin-twig-drupal"
import { join } from "node:path"
import multiInput from "rollup-plugin-multi-input"

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "components"),
        // Other namespaces as required.
      },
    }),
    multiInput.default(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: ["components/**/*.pcss", "components/**/*.ts"],
    },
  },
})
