import Button from "./button.twig"
import "./button.css"

export default {
  title: "components/button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
  },
}

export const Default = {
  linkText: "My button",
  link: "#",
  buttonType: "mega",
}
