import JDisplayPicture from './index.jsx';
import displayPicture from '../../../assets/img/me.jpg';

export default {
  title: 'Atoms/JDisplayPicture',
  component: JDisplayPicture,
  tage: [ 'autodocs' ],
  argTypes: {
    image: { control: 'text', description: 'Source URL of the image to be put in display' },
  },
  args: {
    image: displayPicture,
  },
};

export const Default = {};
