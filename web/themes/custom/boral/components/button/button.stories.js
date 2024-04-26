// stories/Button.stories.js
// Button will be a Javascript function that accepts variables for the twig template.
import Button from "./button.twig"
// Import stylesheets, this could be a sass or postcss file too.
import "./button.css"
// You may also have JavaScript for the component.
export default {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    linkText: {
      control: { type: "text" },
    },
    buttonType: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
  },
  // Just pass along the imported variable.
  component: Button,
}
// Set default variables in the story.
export const Default = {
  args: { linkText: "Click me" },
}
export const Primary = {
  args: { linkText: "Click me", buttonType: "primary" },
}
