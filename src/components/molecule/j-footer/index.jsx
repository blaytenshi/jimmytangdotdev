import StyledFooter, { StyledCopyrightText } from './styles.js';

const JFooter = ({ year }) => {
  return (
    <StyledFooter>
      <StyledCopyrightText>© Jimmy Tang {year}</StyledCopyrightText>
    </StyledFooter>
  )
}

export default JFooter;
