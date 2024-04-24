import Button from './button.twig'
import './button.css'

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export const Default = {
  linkText: 'My button',
  link: '#',
  buttonType: 'mega',
}
