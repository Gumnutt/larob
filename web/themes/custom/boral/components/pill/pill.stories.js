import Pill from './pill.twig'
import './pill.css'

export default {
  title: 'Components/Pill',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
  },
  component: Pill,
}

export const Default = {
  args: {
    text: 'News',
    link: '',
  },
}

export const Interactive = {
  args: {
    text: 'News',
    link: '#',
  },
}
