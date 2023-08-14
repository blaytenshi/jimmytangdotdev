import styled from 'styled-components';
import { getTheme } from '../../../utils/index.js';

const StyledSeparator = styled.hr`
  border: 1px solid ${getTheme('colors', 'hr', 'lineColor' )};;
`;

export default StyledSeparator;
