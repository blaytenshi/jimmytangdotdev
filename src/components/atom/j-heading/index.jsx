import StyledHeading, {StyledFirstWord, StyledSecondWord} from './styles.js';

const JHeading = ({type, firstWord, secondWord}) => {
  return (
    <StyledHeading
      as={type}
      type={type}
    >
      <StyledFirstWord>{firstWord}</StyledFirstWord>
      <StyledSecondWord>{secondWord}</StyledSecondWord>
    </StyledHeading>
  );
};

export default JHeading;
