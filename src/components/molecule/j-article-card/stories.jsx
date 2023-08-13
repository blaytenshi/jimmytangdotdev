import JArticleCard from './index.jsx';
import testImage from '../../../assets/img/tina.png';

export default {
  title: 'Molecules/JArticleCard',
  component: JArticleCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    toggleHover: {
      action: 'hoverToggled',
    },
    description: {
      control: 'text',
      description: 'Description of the article',
    },
    isHovered: {
      control: 'boolean',
      description: 'Element is hovered',
    },
    image: {
      control: 'text',
      description: 'Source URL of the image',
    },
  },
  args: {
    description: 'Test article description',
    isHovered: false,
    image: testImage,
  },
};

export const Default = {
  args: {
    description: 'TINA: A Next Generation Superannuation Admini Platform',
  },
};
