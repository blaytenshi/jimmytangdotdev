import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";
import { MIN_MEDIA_BREAKPOINTS } from "../../../utils/constants.js";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem;

  @media screen and (min-width: ${MIN_MEDIA_BREAKPOINTS.PX_768}) {
    justify-content: space-around;
    flex-direction: row;
  }
`

export const StyledHeadingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
`

export const StyledSubheader = styled.p`
  font-size: 1.5rem;
  color: ${getTheme("colors", "header", "subheader")};
  
  @media screen and (min-width: ${MIN_MEDIA_BREAKPOINTS.PX_768}) {
    font-size: ${getTheme("fontSize", "header", "subtitle")};
  }
`

export const StyledDisplayPictureWrapper = styled.div`
  width: 16rem;
  
  @media screen and (min-width: ${MIN_MEDIA_BREAKPOINTS.PX_768}) {
    width: 12rem;
  }
`

export default StyledHeader;
