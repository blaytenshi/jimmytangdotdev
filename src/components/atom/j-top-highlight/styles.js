import {styled} from 'styled-components';
import {getTheme} from '../../../utils/index.js';

const StyledTopHighlight = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: ${getTheme('colors', 'topHeader', 'backgroundColor')};
`;

export default StyledTopHighlight;
