import JTopHighlight from '../../components/atom/j-top-highlight/index.jsx';
import Footer from '../../widgets/footer.jsx';
import StyledSingleColumnLayout, { StyledContainerWrapper, StyledFooterWrapper } from './styles.js';

const SingleColumnLayout = ({ main: Main }) => {
  return (
    <StyledSingleColumnLayout>
      <JTopHighlight />
      <StyledContainerWrapper>
        <Main />
      </StyledContainerWrapper>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </StyledSingleColumnLayout>
  );
};

export default SingleColumnLayout;
