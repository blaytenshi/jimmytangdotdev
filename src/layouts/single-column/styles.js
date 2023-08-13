import {styled} from 'styled-components';
import {getTheme} from '../../utils/index.js';

const StyledSingleColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 992px;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${getTheme('colors', 'footer', 'backgroundColor')};
  width: 100%;
`;

export default StyledSingleColumnLayout;
