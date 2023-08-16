import JHeading from '../components/atom/j-heading/index.jsx';
import { HEADING_SIZES } from '../utils/constants.js';
import SmartArticleCard from '../smart-component/smart-article-card/index.jsx';
import personalwebsite from '../assets/img/personalwebsite.png';
import tkssir from '../assets/img/tkssir.png';
import { useNavigate } from 'react-router-dom';
import JSection from '../components/atom/j-section/index.jsx';

const MyLearning = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    return navigate(route);
  };

  return (
    <JSection>
      <JHeading type={HEADING_SIZES.H2} firstWord="My" secondWord="Learning" />
      <div className="py-4 grid grid-cols-1 gap-2 tablet:grid-cols-3">
        <SmartArticleCard
          image={personalwebsite}
          description="Tina: A Next Gen Superannuation Admin Platform"
          handleClick={() => navigateTo('/experiments/personalwebsitev1')}
        />
        <SmartArticleCard
          image={tkssir}
          description="Tina: A Next Gen Superannuation Admin Platform"
          handleClick={() => navigateTo('/learnings/ajourneyfrompapertodigital')}
        />
      </div>
    </JSection>
  );
};

export default MyLearning;
