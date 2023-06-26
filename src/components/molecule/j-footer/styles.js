import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";

const StyledFooter = styled.footer`
  display: flex;
  background-color: ${getTheme("colors", "footer", "backgroundColor")};
  padding: 1.5rem 2rem;
`;

export const StyledCopyrightText = styled.p`
  color: ${getTheme("colors", "footer", "text")};
`;

export default StyledFooter;
