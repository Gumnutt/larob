import { defineConfig } from "vite"
import twig from "vite-plugin-twig-drupal"
import { join } from "node:path"
export default defineConfig({
  plugins: [
    // Other vite plugins.
    twig({
      namespaces: {
        components: join(__dirname, "components"),
        // Other namespaces as required.
      },
      // Optional if you are using React storybook renderer. The default is 'html' and works with storybook's html
      // renderer.
      // framework: 'react'
    }),
    // Other vite plugins.
  ],
})
