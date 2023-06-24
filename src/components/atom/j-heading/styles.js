import { styled } from 'styled-components';

const headingSize = {
  h1: '5rem',
  h2: '1.875rem',
}

const headingWeight = {
  h1: 800,
  h2: 700,
}

const StyledHeading = styled.div`
  font-size: ${({ type }) => headingSize[type]};
  font-weight: ${({ type }) => headingWeight[type]};
`

export const StyledFirstWord = styled.span`
  color: #e74b4b;
`

export const StyledSecondWord = styled.span`
  color: #d56b6b;
`

export default StyledHeading;
