import Card from "./card.twig"
import "./card.css"
import "../button/button.css"

export default {
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      controls: { type: "select", options: ["basic", "feature"] },
    },
    title: {
      controls: { type: "text" },
    },
    title_tag: {
      controls: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    tags: {
      controls: { type: "object" },
    },
    media: {
      controls: { type: "text" },
    },
    button_text: {
      control: { type: "text" },
    },
    button_variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "text"],
    },
    button_size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    button_filled: {
      control: { type: "boolean" },
    },
    button_rounded: {
      control: { type: "boolean" },
    },
    button_icon: {
      control: { type: "select" },
      options: ["search", "arrow_forward", "arrow_back", "menu", "close"],
    },
    button_icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    button_link: {
      control: { type: "text" },
    },
  },
  component: Card,
}

export const Basic = {
  args: {
    variant: "basic",
    title: "Card Title",
    title_tag: "h3",
    tags: ["Tag 1", "Tag 2"],
    media: "https://via.placeholder.com/150",
  },
}
