import Button from './button.twig'
import './button.css'

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    variant: {
      control: { type: 'select' },
      options: ['rounded', 'bordered', 'filled'],
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'arrow', 'hex'],
    },
  },
  component: Button,
}

export const Primary = {
  args: {
    text: 'Click me',
    type: 'primary',
    variant: 'bordered',
    icon: 'none',
  },
}

export const Secondary = {
  args: {
    text: 'Click me',
    type: 'secondary',
    variant: 'bordered',
    icon: 'none',
  },
}

export const tertiary = {
  args: {
    text: 'Click me',
    type: 'tertiary',
    variant: 'bordered',
    icon: 'none',
  },
}
