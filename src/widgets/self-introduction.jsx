import resume from '../assets/files/resume.pdf';
import JSection from '../components/atom/j-section/index.jsx';

const SelfIntroduction = () => (
  <JSection>
    <p className="pb-8">
      Hi! My name is Jimmy and I'm a software developer from Sydney, Australia. I currently specialise in Front End
      Web Development but also have a variety of experience in all areas of software development from Product Design
      to API Integrations.
    </p>
    <p>
      I'm currently in search of my next role! 👨🏻‍💻 If you have a need for an enthusiastic,
      energetic, web developer with a passion for building great user experiences in cross functional and
      collaborative teams, take a look at my <a href={resume} className="link">resume</a> and come say
      Hi! 👋
    </p>
  </JSection>
);

export default SelfIntroduction;
