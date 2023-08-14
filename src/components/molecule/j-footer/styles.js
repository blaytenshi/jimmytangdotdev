import { styled } from 'styled-components';
import { getTheme } from '../../../utils/index.js';

const StyledFooter = styled.footer`
  display: flex;
  background-color: ${getTheme('colors', 'footer', 'backgroundColor')};
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 992px;
`;

export const StyledCopyrightText = styled.p`
  color: ${getTheme('colors', 'footer', 'text')};
`;

export const StyledSocialsWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export default StyledFooter;
