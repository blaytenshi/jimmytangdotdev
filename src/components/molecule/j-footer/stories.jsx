import JFooter from './index.jsx';

export default {
  title: 'Molecules/JFooter',
  component: JFooter,
  tags: ['autodocs'],
  argTypes: {
    year: { control: 'number', description: 'Copyright year' },
    socials: { control: 'object', description: 'List of social objects' }
  },
  args: {
    year: 2023,
    socials: [
      { name: 'gmail' },
      { name: 'twitter' },
      { name: 'linkedin' },
      { name: 'github' },
    ]
  }
}

export const Default = {}
