import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #a11616;
  border: 1px solid #922424;
  color: #e8e6e3;
  appearance: none;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: ${props => props.$capitalize ? 'uppercase' : 'none' };
  width: ${props => props.$fullWidth ? '100%' : 'auto' };
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  &:hover {
    cursor: pointer;
    background-color: #8c0909;
    transform: translateY(-0.25rem);
  }
`

export default StyledButton;
