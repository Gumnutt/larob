import Button from "./button.twig"
import "./button.css"

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    filled: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },
    icon: {
      control: { type: "select" },
      options: ["none", "arrow", "hex"],
    },
    icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    link: {
      control: { type: "text" },
    },
  },
  component: Button,
}

export const Primary = {
  args: {
    text: "Click me",
    variant: "primary",
    size: "small",
    style: "bordered",
    icon: "none",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const Secondary = {
  args: {
    text: "Click me",
    variant: "secondary",
    size: "small",
    style: "bordered",
    icon: "none",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const tertiary = {
  args: {
    text: "Click me",
    variant: "primary",
    size: "small",
    style: "bordered",
    icon: "none",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const text = {
  args: {
    text: "Click me",
    variant: "text",
    size: "small",
    style: "bordered",
    icon: "none",
    filled: true,
    rounded: false,
    link: "#",
  },
}
