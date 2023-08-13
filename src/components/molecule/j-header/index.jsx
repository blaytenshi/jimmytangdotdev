import JHeading from '../../atom/j-heading/index.jsx';
import JDisplayPicture from '../../atom/j-display-picture/index.jsx';
import StyledHeader, {StyledSubheader, StyledHeadingTextWrapper, StyledDisplayPictureWrapper} from './styles.js';
import {HEADING_SIZES} from '../../../utils/constants.js';
import image from '../../../assets/img/me.jpg';

const JHeader = () => {
  return (
    <StyledHeader>
      <StyledHeadingTextWrapper>
        <JHeading type={HEADING_SIZES.H1} firstWord="jimmy" secondWord="tang" />
        <StyledSubheader>Software Developer</StyledSubheader>
      </StyledHeadingTextWrapper>
      <StyledDisplayPictureWrapper>
        <JDisplayPicture image={image}/>
      </StyledDisplayPictureWrapper>
    </StyledHeader>
  );
};

export default JHeader;
