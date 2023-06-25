import JHeading from "../../atom/j-heading/index.jsx";
import JDisplayPicture from "../../atom/j-display-picture/index.jsx";
import StyledHeader, { StyledSubheader, StyledHeadingTextWrapper, StyledDisplayPictureWrapper } from "./styles.js";

const JHeader = () => {
  return (
    <StyledHeader>
      <StyledHeadingTextWrapper>
        <JHeading type="h1" firstWord="jimmy" secondWord="tang" />
        <StyledSubheader>Software Developer</StyledSubheader>
      </StyledHeadingTextWrapper>
      <StyledDisplayPictureWrapper>
        <JDisplayPicture />
      </StyledDisplayPictureWrapper>
    </StyledHeader>
  )
}

export default JHeader;
