import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%
`

export const StyledHeadingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
`

export const StyledSubheader = styled.p`
  font-size: ${getTheme("fontSize", "header", "subtitle")};
  color: ${getTheme("colors", "header", "subheader")};
`

export const StyledDisplayPictureWrapper = styled.div`
  width: 12rem;
`

export default StyledHeader;
