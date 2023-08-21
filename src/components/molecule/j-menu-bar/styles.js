import { styled } from 'styled-components';
import { MIN_MEDIA_BREAKPOINTS } from '../../../utils/constants.js';

const StyledMenuBar = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0 1rem;
  
  @media screen and (min-width: ${MIN_MEDIA_BREAKPOINTS.PX_768} ) {
    flex-direction: row;
    column-gap: 1rem;
    padding: 1rem 2rem;
  }
`;

export default StyledMenuBar;
