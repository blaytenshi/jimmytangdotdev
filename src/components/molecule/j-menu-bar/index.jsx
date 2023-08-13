import JButton from '../../atom/j-button/index.jsx';
import StyledMenuBar from './styles.js';

const JMenuBar = ({navigateOriginStory, navigateMyWork, navigateMyLearning}) => {
  return (
    <StyledMenuBar>
      <JButton label="Origin Story" $capitalize $fullWidth onClick={navigateOriginStory} />
      <JButton label="My Work" $capitalize $fullWidth onClick={navigateMyWork} />
      <JButton label="My Learning" $capitalize $fullWidth onClick={navigateMyLearning} />
    </StyledMenuBar>
  );
};

export default JMenuBar;
