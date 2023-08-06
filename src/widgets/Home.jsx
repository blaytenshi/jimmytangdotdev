import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import tina from "../assets/img/tina.png";
import tkssir from "../assets/img/tkssir.png";
import tmm from "../assets/img/tmm.png";
import personalwebsite from "../assets/img/personalwebsite.png";
import resume from "../assets/files/resume.pdf";
import JHeading from "../components/atom/j-heading/index.jsx";
import { HEADING_SIZES } from "../utils/constants.js";
import JMenuBar from "../components/molecule/j-menu-bar/index.jsx";
import JSeparator from "../components/atom/j-separator/index.jsx";
import JArticleCard from "../components/molecule/j-article-card/index.jsx";

const Home = () => {

  const navigate = useNavigate();
  const myWorkRef = useRef(null);
  const myLearningRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const navigateTo = (route) => {
    return navigate(route);
  }

  const scrollTo = (ref) => {
    return scrollToRef(ref);
  }

  const toggleArticleCardHover = (target) => {
    console.log('target', target);
  }

  return (
    <>
      <JMenuBar
        navigateOriginStory={() => navigateTo("/originstory")}
        navigateMyLearning={() => scrollTo(myLearningRef)}
        navigateMyWork={() => scrollTo(myWorkRef)}
      />
      <JSeparator />
      <section className="px-8 py-12 border-b border-red-500 intro-text">
        <p className="pb-8">
          Hi! My name is Jimmy and I'm a software developer from Sydney, Australia. I currently specialise in Front End
          Web Development but also have a variety of experience in all areas of software development from Product Design
          to API Integrations.
        </p>
        <p>
          I'm currently in search of my next role! 👨🏻‍💻 If you have a need for an enthusiastic,
          energetic, web developer with a passion for building great user experiences in cross functional and
          collaborative teams, take a look at my <a href={resume} className="link">resume</a> and come say
          Hi! 👋
        </p>
      </section>
      <JSeparator />
      <section className="px-8 py-12 border-b border-red-500" ref={myWorkRef}>
        <JHeading type={HEADING_SIZES.H2} firstWord="My" secondWord="Work" />
        <div className="py-4 grid tablet:grid-cols-2 gap-2">
          <JArticleCard
            image={tkssir}
            description="TK SSIR: Helping reduce alcohol related violence in Sydney"
            toggleHover={(target) => toggleArticleCardHover(target)}
            onClick={() => navigateTo("/work/tkssir")}
          />
          <JArticleCard
            image={tmm}
            description="#thisMyMob: A Social Network for Indigenous Australians"
            toggleHover={(target) => toggleArticleCardHover(target)}
            onClick={() => navigateTo("/work/thismymob")}
          />
          <JArticleCard
            image={tina}
            description="Tina: A Next Gen Superannuation Admin Platform"
            toggleHover={(target) => toggleArticleCardHover(target)}
            onClick={() => navigateTo("/work/tina")}
          />
        </div>
      </section>
      <section className="px-8 py-12" ref={myLearningRef}>
        <JHeading type={HEADING_SIZES.H2} firstWord="My" secondWord="Learning" />
        <div className="py-4 grid grid-cols-1 gap-2 tablet:grid-cols-3">
          <JArticleCard
            image={personalwebsite}
            description="Tina: A Next Gen Superannuation Admin Platform"
            toggleHover={(target) => toggleArticleCardHover(target)}
            onClick={() => navigateTo("/experiments/personalwebsitev1")}
          />
          <JArticleCard
            image={tkssir}
            description="Tina: A Next Gen Superannuation Admin Platform"
            toggleHover={(target) => toggleArticleCardHover(target)}
            onClick={() => navigateTo("/learnings/ajourneyfrompapertodigital")}
          />
        </div>
      </section>
    </>
  )
};

export default Home;
