import { styled } from 'styled-components';
import { fontSize } from "../../../utils/font-size.js";

const headingWeight = {
  h1: 600,
  h2: 600,
}

const letterSpacing = {
  h1: '-0.25rem',
  h2: '-0.1rem',
}

const StyledHeading = styled.div`
  font-size: ${({ type }) => fontSize[type]};
  font-weight: ${({ type }) => headingWeight[type]};
  letter-spacing: ${({ type }) => letterSpacing[type]};
`

export const StyledFirstWord = styled.span`
  color: #e74b4b;
`

export const StyledSecondWord = styled.span`
  color: #d56b6b;
`

export default StyledHeading;
