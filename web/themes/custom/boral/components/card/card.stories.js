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
    body: {
      controls: { type: "text" },
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
    body: "Lorem ispum dolor sit amet consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.",
    tags: ["Tag 1", "Tag 2"],
    media: "https://via.placeholder.com/150",
    button_text: "Read More",
    button_variant: "primary",
    button_size: "small",
    button_filled: true,
    button_rounded: false,
    button_icon: "arrow_forward",
    button_icon_position: "right",
    button_link: "#",
  },
}
