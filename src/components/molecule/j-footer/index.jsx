import StyledFooter, {StyledCopyrightText, StyledSocialsWrapper} from './styles.js';

const JFooter = ({year, children}) => {
  return (
    <StyledFooter>
      <StyledCopyrightText>© Jimmy Tang {year}</StyledCopyrightText>
      <StyledSocialsWrapper>
        { children }
      </StyledSocialsWrapper>
    </StyledFooter>
  );
};

export default JFooter;
