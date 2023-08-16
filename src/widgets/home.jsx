import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import tina from '../assets/img/tina.png';
import tkssir from '../assets/img/tkssir.png';
import tmm from '../assets/img/tmm.png';
import personalwebsite from '../assets/img/personalwebsite.png';
import JHeading from '../components/atom/j-heading/index.jsx';
import { HEADING_SIZES } from '../utils/constants.js';
import JMenuBar from '../components/molecule/j-menu-bar/index.jsx';
import JSeparator from '../components/atom/j-separator/index.jsx';
import SmartArticleCard from '../smart-component/smart-article-card/index.jsx';
import SelfIntroduction from './self-introduction.jsx';

const Home = () => {
  const navigate = useNavigate();
  const myWorkRef = useRef(null);
  const myLearningRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const navigateTo = (route) => {
    return navigate(route);
  };

  const scrollTo = (ref) => {
    return scrollToRef(ref);
  };

  return (
    <>
      <JMenuBar
        navigateOriginStory={() => navigateTo('/originstory')}
        navigateMyLearning={() => scrollTo(myLearningRef)}
        navigateMyWork={() => scrollTo(myWorkRef)}
      />
      <JSeparator />
      <SelfIntroduction />
      <JSeparator />
      <section className="px-8 py-12 border-b border-red-500" ref={myWorkRef}>
        <JHeading type={HEADING_SIZES.H2} firstWord="My" secondWord="Work" />
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
      </section>
      <section className="px-8 py-12" ref={myLearningRef}>
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
      </section>
    </>
  );
};

export default Home;
