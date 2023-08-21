import StyledParagraph from './styles.js';

const JParagraph = ({ textAlign, children }) => {
  return (
    <StyledParagraph $textAlign={textAlign}>
      {children}
    </StyledParagraph>
  );
};

export default JParagraph;
