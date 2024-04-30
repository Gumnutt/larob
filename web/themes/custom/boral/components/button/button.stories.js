import Button from './button.twig'
import './button.css'

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    style: {
      control: { type: 'select' },
      options: ['rounded', 'bordered', 'filled'],
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'arrow', 'hex'],
    },
    link: {
      control: { type: 'text' },
    },
  },
  component: Button,
}

export const Primary = {
  args: {
    text: 'Click me',
    variant: 'primary',
    style: 'bordered',
    icon: 'none',
  },
}

export const Secondary = {
  args: {
    text: 'Click me',
    variant: 'secondary',
    style: 'bordered',
    icon: 'none',
  },
}

export const tertiary = {
  args: {
    text: 'Click me',
    variant: 'tertiary',
    style: 'bordered',
    icon: 'none',
  },
}
