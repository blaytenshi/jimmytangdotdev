import { styled } from 'styled-components';
import { getTheme } from '../../../utils/index.js';

const StyledArticleCardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const StyledArticleCardImage = styled.img`
  height: 16rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.2s;
  transform: scale(${({ $isHovered }) => $isHovered ? '1.1' : '1.0'});
`;

export const StyledArticleCardDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${getTheme('colors', 'articleCard', 'backgroundColor')};
  transition: opacity 0.2s;
  opacity: ${({ $isHovered }) => $isHovered ? '0.9' : '0.75'};
  width: 100%;
`;

const articleCardTextHovered = getTheme('colors', 'articleCard', 'textHovered');
const articleCardText = getTheme('colors', 'articleCard', 'text');

export const StyledArticleCardDescription = styled.p`
  padding: 0.5rem 1rem;
  color: ${({ $isHovered }) => $isHovered ? articleCardTextHovered : articleCardText};
`;

export default StyledArticleCardWrapper;
