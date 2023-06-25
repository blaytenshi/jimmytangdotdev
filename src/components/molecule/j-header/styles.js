import { styled } from 'styled-components';
import {fontSize} from "../../../utils/font-size.js";

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
  font-size: ${fontSize["subtitle"]};
  color: #1a202c;
`

export const StyledDisplayPictureWrapper = styled.div`
  width: 12rem;
`

export default StyledHeader;
