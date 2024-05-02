/** @type { import('@storybook/html').Preview } */
// import "../assets/pcss/tailwind.pcss"
import "../assets/pcss/variables.pcss"
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
