import Heading from "./heading.twig"

export default {
  title: "Components/Heading",
  tags: ["autodocs"],
  argTypes: {
    heading_html_tag: {
      controls: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    heading_classes: {
      controls: { type: "object" },
    },
    title_link: {
      controls: { type: "text" },
    },
    content: {
      controls: { type: "text" },
    },
  },
  component: Heading,
}

export const Heading_1 = {
  args: {
    heading_html_tag: "h1",
    content: "Heading level 1",
  },
}

export const Heading_2 = {
  args: {
    heading_html_tag: "h2",
    content: "Heading level 2",
  },
}

export const Heading_3 = {
  args: {
    heading_html_tag: "h3",
    content: "Heading level 3",
  },
}

export const Heading_4 = {
  args: {
    heading_html_tag: "h4",
    content: "Heading level 4",
  },
}

export const Heading_5 = {
  args: {
    heading_html_tag: "h5",
    content: "Heading level 5",
  },
}

export const Heading_6 = {
  args: {
    heading_html_tag: "h6",
    content: "Heading level 6",
  },
}
