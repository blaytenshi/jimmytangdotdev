import JHeading from './index.jsx';

export default {
  title: 'Atoms/JHeading',
  component: JHeading,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'H1', 'H2',
      ],
      mapping: {
        H1: 'h1',
        H2: 'h2',
      },
      description: 'What level of Heading element',
    },
    firstWord: {control: 'text', description: 'The first word in the heading element'},
    secondWord: {control: 'text', description: 'The second word in the heading element'},
  },
  args: {
    type: 'h1',
    firstWord: 'jimmy',
    secondWord: 'tang',
  },
};

export const Default = {};

export const SmallHeader = {
  args: {
    type: 'h2',
    firstWord: 'My',
    secondWord: 'Learning',
  },
};
