import StyledFooter, {StyledCopyrightText, StyledSocialsWrapper} from './styles.js';
import JIcon from "../../atom/j-icon/index.jsx";

const JFooter = ({ year, socials }) => {
  return (
    <StyledFooter>
      <StyledCopyrightText>© Jimmy Tang {year}</StyledCopyrightText>
      <StyledSocialsWrapper>
        { socials?.map(({ name }) => <JIcon key={name} name={name} />)}
      </StyledSocialsWrapper>
    </StyledFooter>
  )
}

export default JFooter;
