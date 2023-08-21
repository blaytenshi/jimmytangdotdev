import JIcon from './index.jsx';
import { ICON_MAP, ICON } from '../../../utils/constants.js';

export default {
  title: 'Molecules/JIcon',
  component: JIcon,
  tags: [ 'autodocs' ],
  parameters: {
    docs: {
      description: {
        component: 'The JIcon Atom. It is technically a smart atom that has logic inside to asynchronously import the SVG icon in at runtime.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICON_MAP),
      mapping: ICON_MAP,
      description: 'Icon to display',
    },
    color: {
      control: 'color',
      description: 'The fill colour of the icon',
    },
    size: {
      control: 'string',
      description: 'The size of the icon through height. Accepts any usable css measurement value. Prefer px or rem.',
    },
  },
  args: {
    name: ICON.GITHUB,
    color: 'black',
  },
};

export const Default = {};

export const BigColouredIcon = {
  parameters: {
    docs: {
      description: {
        story: 'An big icon with it\'s colour changed',
      },
    },
  },
  args: {
    name: ICON.GMAIL,
    color: 'red',
    height: '3rem',
  },
};
