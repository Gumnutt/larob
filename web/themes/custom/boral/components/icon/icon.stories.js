import Icon from "./icon.twig"
import "./icon.css"

export default {
  title: "Components/Icon",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
    },
    source: {
      control: { type: "select" },
      options: ["material", "custom"],
    },
  },
  component: Icon,
}

export const Default = {
  args: {
    name: "",
    source: "",
  },
}

export const Material = {
  args: {
    name: "search",
    source: "material",
  },
}

export const Custom = {
  args: {
    name: "News",
    source: "custom",
  },
}
