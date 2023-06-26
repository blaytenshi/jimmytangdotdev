import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";

const StyledHeading = styled.div`
  font-size: ${({ type }) => getTheme("fontSize", "header", type)};
  font-weight: ${({ type }) => getTheme("fontWeight", "header", type)};
  letter-spacing: ${({ type }) => getTheme("letterSpacing", "header", type)};
`

export const StyledFirstWord = styled.span`
  color: ${getTheme("colors", "header", "firstWord")};
`

export const StyledSecondWord = styled.span`
  color: ${getTheme("colors", "header", "secondWord")};
`

export default StyledHeading;
