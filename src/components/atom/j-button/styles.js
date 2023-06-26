import styled from 'styled-components';
import { getTheme } from "../../../utils/index.js";

const StyledButton = styled.button`
  background-color: ${getTheme("colors", "button", "backgroundColor")};
  border: 1px solid ${getTheme("colors", "button", "border" )};
  color: ${getTheme("colors", "button", "text")};
  appearance: none;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: ${props => props.$capitalize ? 'uppercase' : 'none' };
  width: ${props => props.$fullWidth ? '100%' : 'auto' };
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  &:hover {
    cursor: pointer;
    background-color: ${getTheme("colors", "button", "backgroundColorHover")};
    transform: translateY(-0.25rem);
  }
`

export default StyledButton;
