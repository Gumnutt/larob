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
    title: {
      control: { type: "text" },
    },
    desc: {
      control: { type: "text" },
    },
  },
  component: Icon,
}

export const Default = {
  args: {
    name: "",
    source: "",
    title: "",
    desc: "",
  },
}

export const Material = {
  args: {
    name: "search",
    source: "material",
    title: "Search",
    desc: "Search Icon",
  },
}

export const Custom = {
  args: {
    name: "News",
    source: "custom",
    title: "News",
    desc: "News Icon",
  },
}
