import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #a11616;
  border: 1px solid #922424;
  color: #e8e6e3;
  appearance: none;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  text-transform: ${props => props.capitalize ? 'uppercase' : 'none' };
  &:hover {
    cursor: pointer;
    background-color: #8c0909;
  }
`

export default StyledButton;
