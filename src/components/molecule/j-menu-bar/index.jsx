import JButton from "../../atom/j-button/index.jsx";
import StyledMenuBar from "./styles.js";

const JMenuBar = () => {
  return (
    <StyledMenuBar>
      <JButton label="Origin Story" $capitalize $fullWidth />
      <JButton label="My Work" $capitalize $fullWidth />
      <JButton label="My Learning" $capitalize $fullWidth />
    </StyledMenuBar>
  )
}

export default JMenuBar;
