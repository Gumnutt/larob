/** @type { import('@storybook/html').Preview } */
// import "../assets/pcss/tailwind.pcss"
import "../assets/pcss/base/variables.css"
import "../assets/pcss/base/typography.css"
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
