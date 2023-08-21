import JParagraph from './index.jsx';
import { TEXT_ALIGN_MAP, TEXT_ALIGN_VALUES } from '../../../utils/constants.js';

export default {
  title: 'Atoms/JParagraph',
  component: JParagraph,
  tags: [ 'autodocs' ],
  argTypes: {
    textAlign: {
      control: 'select',
      options: Object.values(TEXT_ALIGN_VALUES),
      mapping: TEXT_ALIGN_MAP,
      description: 'How the paragraph should be aligned',
    },
  },
  args: {
    textAlign: TEXT_ALIGN_VALUES.LEFT,
  },
};

export const Default = {
  render: () => (
    <JParagraph>
      {/* eslint-disable-next-line max-len */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tempus leo nec malesuada. Sed sit amet varius lacus. Pellentesque malesuada sed dui sit amet ultrices. Suspendisse potenti. Quisque lobortis augue a augue malesuada luctus. Integer odio quam, eleifend non aliquet id, bibendum ut neque. Quisque et ante laoreet urna faucibus vulputate. Donec imperdiet est id luctus commodo. Pellentesque sollicitudin ullamcorper neque, sed feugiat mauris malesuada sed. Pellentesque et ullamcorper tellus, eu blandit mauris.
    </JParagraph>
  ),
};

export const ParagraphWithTextAlign = {
  render: (args) => (
    <JParagraph {...args}>
      {/* eslint-disable-next-line max-len */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tempus leo nec malesuada. Sed sit amet varius lacus. Pellentesque malesuada sed dui sit amet ultrices. Suspendisse potenti. Quisque lobortis augue a augue malesuada luctus. Integer odio quam, eleifend non aliquet id, bibendum ut neque. Quisque et ante laoreet urna faucibus vulputate. Donec imperdiet est id luctus commodo. Pellentesque sollicitudin ullamcorper neque, sed feugiat mauris malesuada sed. Pellentesque et ullamcorper tellus, eu blandit mauris.
    </JParagraph>
  ),
  args: {
    textAlign: TEXT_ALIGN_VALUES.RIGHT,
  },
};

export const ParagraphWithAnchor = {
  render: (args) => (
    <JParagraph {...args}>
      {/* eslint-disable-next-line max-len */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tempus leo nec malesuada. Sed sit amet varius lacus. Pellentesque malesuada sed dui sit amet <a href="#">ultrices</a>. Suspendisse potenti. Quisque lobortis augue a augue malesuada luctus. Integer odio quam, eleifend non aliquet id, bibendum ut neque. Quisque et ante laoreet urna faucibus vulputate. Donec imperdiet est id luctus commodo. Pellentesque sollicitudin ullamcorper neque, sed feugiat mauris malesuada sed. Pellentesque et ullamcorper tellus, eu blandit mauris.
    </JParagraph>
  ),
  args: {
    textAlign: TEXT_ALIGN_VALUES.LEFT,
  },
};

export const MultiParagraphsWithSpacing = {
  render: () => (
    <>
      <JParagraph>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tempus leo nec malesuada. Sed sit amet varius lacus. Pellentesque malesuada sed dui sit amet <a href="#">ultrices</a>. Suspendisse potenti. Quisque lobortis augue a augue malesuada luctus. Integer odio quam, eleifend non aliquet id, bibendum ut neque. Quisque et ante laoreet urna faucibus vulputate. Donec imperdiet est id luctus commodo. Pellentesque sollicitudin ullamcorper neque, sed feugiat mauris malesuada sed. Pellentesque et ullamcorper tellus, eu blandit mauris.
      </JParagraph>
      <JParagraph>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tempus leo nec malesuada. Sed sit amet varius lacus. Pellentesque malesuada sed dui sit amet <a href="#">ultrices</a>. Suspendisse potenti. Quisque lobortis augue a augue malesuada luctus. Integer odio quam, eleifend non aliquet id, bibendum ut neque. Quisque et ante laoreet urna faucibus vulputate. Donec imperdiet est id luctus commodo. Pellentesque sollicitudin ullamcorper neque, sed feugiat mauris malesuada sed. Pellentesque et ullamcorper tellus, eu blandit mauris.
      </JParagraph>
    </>
  ),
};
