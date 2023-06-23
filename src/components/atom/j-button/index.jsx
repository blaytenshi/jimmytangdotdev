import StyledButton from './styles.js';

const JButton = ({ label, ...rest }) => {
  return (
    <StyledButton {...rest}>{label}</StyledButton>
  )
}

export default JButton;
