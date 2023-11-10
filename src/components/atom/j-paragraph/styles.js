import { styled } from 'styled-components';
import { getFontSize, getTheme } from '../../../utils/index.js';
import { TEXT_ALIGN_MAP } from '../../../utils/constants.js';

const StyledParagraph = styled.p`
  font-size: ${({ $textSize, textSize }) => getFontSize('paragraph', $textSize)};
  color: ${getTheme('colors', 'paragraph', 'introText')};
  padding-top: ${getTheme('reference', 'spacing', 'px8')};
  text-align: ${({ $textAlign }) => TEXT_ALIGN_MAP[$textAlign] ?? 'left'};
  &:not(:only-child) {
    padding-bottom: ${getTheme('reference', 'spacing', 'px32')};
  }
  &:last-child {
    padding-bottom: ${getTheme('reference', 'spacing', 'px8')};
  }
  
  // for any anchor tags within the paragraph tag...
  a {
    color: ${getTheme('colors', 'paragraph', 'anchor')};
    &:hover {
      text-decoration: none;
    }
  }
`;

export default StyledParagraph;
