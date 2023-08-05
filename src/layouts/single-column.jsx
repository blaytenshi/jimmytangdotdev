import JTopHighlight from "../components/atom/j-top-highlight/index.jsx";
import Footer from "../widgets/Footer.jsx";

const SingleColumnLayout = ({ main: Main }) => {
  return (
    <>
      <JTopHighlight />
      <Main />
      <Footer />
    </>
  )
}

export default SingleColumnLayout;
