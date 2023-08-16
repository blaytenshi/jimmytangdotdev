import JHeading from '../components/atom/j-heading/index.jsx';
import { HEADING_SIZES } from '../utils/constants.js';
import SmartArticleCard from '../smart-component/smart-article-card/index.jsx';
import tkssir from '../assets/img/tkssir.png';
import tmm from '../assets/img/tmm.png';
import tina from '../assets/img/tina.png';
import JSection from '../components/atom/j-section/index.jsx';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    return navigate(route);
  };

  return (
    <JSection>
      <JHeading type={HEADING_SIZES.H2} firstWord="My" secondWord="Work"/>
      <div className="py-4 grid tablet:grid-cols-2 gap-2">
        <SmartArticleCard
          image={tkssir}
          description="TK SSIR: Helping reduce alcohol related violence in Sydney"
          handleClick={() => navigateTo('/work/tkssir')}
        />
        <SmartArticleCard
          image={tmm}
          description="#thisMyMob: A Social Network for Indigenous Australians"
          handleClick={() => navigateTo('/work/thismymob')}
        />
        <SmartArticleCard
          image={tina}
          description="Tina: A Next Gen Superannuation Admin Platform"
          handleClick={() => navigateTo('/work/tina')}
        />
      </div>
    </JSection>
  );
};

export default MyWork;
