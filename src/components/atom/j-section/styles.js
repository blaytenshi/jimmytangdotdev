import styled from 'styled-components';
import { getTheme } from '../../../utils/index.js';

const px48 = getTheme('reference', 'spacing', 'px48');
const px32 = getTheme('reference', 'spacing', 'px32');

const StyledSection = styled.section`
  padding: ${px48} ${px32};
`;

export default StyledSection;
