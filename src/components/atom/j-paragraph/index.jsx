import StyledParagraph from './styles.js';

const JParagraph = ({ textAlign, textSize, children }) => {
  return (
    <StyledParagraph $textAlign={textAlign} $textSize={textSize}>
      {children}
    </StyledParagraph>
  );
};

export default JParagraph;
