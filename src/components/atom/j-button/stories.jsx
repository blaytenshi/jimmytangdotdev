import JButton from './index.jsx';

export default {
  title: "Atoms/JButton",
  component: JButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label of the button' },
    $capitalize: { control: 'boolean', description: 'Should capitalize the label of the button' },
    $fullWidth: { control: 'boolean', description: 'Should occupy full width of viewport' }
  },
  args: {
    label: 'Origin Story',
    $capitalize: false,
    $fullWidth: false,
  }
};

export const Default = {}

export const CaplitalisedFullWidthButton = {
  args: {
    $capitalize: true,
    $fullWidth: true,
  }
}

