import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";
import { MIN_MEDIA_BREAKPOINTS } from "../../../utils/constants.js";

const StyledHeading = styled.div`
  font-size: ${({ type }) => getTheme("fontSize", "header", type)};;
  font-weight: ${({ type }) => getTheme("fontWeight", "header", type)};
  letter-spacing: ${({ type }) => getTheme("letterSpacing", "header", type)};
  
  @media screen and (min-width: ${MIN_MEDIA_BREAKPOINTS.PX_768}) {
    font-size: ${({ type }) => getTheme("fontSize", "header", type)};
  }
`

export const StyledFirstWord = styled.span`
  color: ${getTheme("colors", "header", "firstWord")};
`

export const StyledSecondWord = styled.span`
  color: ${getTheme("colors", "header", "secondWord")};
`

export default StyledHeading;
