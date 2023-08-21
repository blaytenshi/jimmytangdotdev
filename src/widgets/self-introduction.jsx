import resume from '../assets/files/resume.pdf';
import JSection from '../components/atom/j-section/index.jsx';
import JParagraph from '../components/atom/j-paragraph/index.jsx';
import { TEXT_ALIGN_VALUES } from '../utils/constants.js';

const SelfIntroduction = () => (
  <JSection>
    <JParagraph textAlign={TEXT_ALIGN_VALUES.CENTER}>
      Hi! My name is Jimmy and I'm a software developer from Sydney, Australia. I currently specialise in Front End
      Web Development but also have a variety of experience in all areas of software development from Product Design
      to API Integrations.
    </JParagraph>
    <JParagraph textAlign={TEXT_ALIGN_VALUES.CENTER}>
      I'm currently in search of my next role! 👨🏻‍💻 If you have a need for an enthusiastic,
      energetic, web developer with a passion for building great user experiences in cross functional and
      collaborative teams, take a look at my <a href={resume} className="link">resume</a> and come say
      Hi! 👋
    </JParagraph>
  </JSection>
);

export default SelfIntroduction;
