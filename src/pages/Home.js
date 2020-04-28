import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import Twemoji from "../components/Twemoji";
import ArticleCard from "../components/ArticleCard";

import tina from "../assets/img/tina.png";
import tkssir from "../assets/img/tkssir.png";
import tmm from "../assets/img/tmm.png";
import personalwebsite from "../assets/img/personalwebsite.png";
import resume from "../assets/files/resume.pdf";

const Home = () => {

  const history = useHistory();

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const myWorkRef = useRef(null);
  const myLearningRef = useRef(null);

  return (
    <>
      <nav className="px-8 pb-4 border-b border-red-500 flex flex-col tablet:flex-row">
        <button className="btn m-2 text-sm w-full" onClick={() => history.push("/originstory")}>ORIGIN STORY</button>
        <button className="btn m-2 text-sm w-full" onClick={() => scrollToRef(myWorkRef)}>MY WORK</button>
        <button className="btn m-2 text-sm w-full" onClick={() => scrollToRef(myLearningRef)}>MY LEARNING</button>
      </nav>
      <section className="px-8 py-12 border-b border-red-500 intro-text">
        <p className="pb-8">
          Hi! My name is Jimmy and I&apos;m a software developer from Sydney, Australia. I currently specialise in Front End
          Web Development but also have a variety of experience in all areas of software development from Product Design
          to API Integrations.
        </p>
        <p>
          I&apos;m currently in search of my next role! <Twemoji emoji="👨🏻‍💻"/> If you have a need for an enthusiastic,
          energetic, web developer with a passion for building great user experiences in cross functional and
          collaborative teams, take a look at my <a href={resume} className="link">resume</a> and come say
          Hi! <Twemoji emoji="👋"/>
        </p>
      </section>
      <section className="px-8 py-12 border-b border-red-500" ref={myWorkRef}>
        <h2 className="text-3xl">
          <span className="font-extrabold text-red-600">My</span>
          <span className="font-bold text-red-800">Work</span>
        </h2>
        <div className="py-4 grid tablet:grid-cols-2 gap-2">
          <Link to="/work/tkssir" className="col-span-1">
            <ArticleCard image={tkssir} description="TK SSIR: Helping reduce alcohol related violence in Sydney"/>
          </Link>
          <Link to="/work/thismymob" className="col-span-1">
            <ArticleCard image={tmm} description="#thisMyMob: A Social Network for Indigenous Australians"/>
          </Link>
          <Link to="/work/tina" className="col-span-1 tablet:col-span-2">
            <ArticleCard image={tina} description="Tina: A Next Gen Superannuation Admin Platform"/>
          </Link>
        </div>
      </section>
      <section className="px-8 py-12" ref={myLearningRef}>
        <h2 className="text-3xl">
          <span className="font-extrabold text-red-600">My</span>
          <span className="font-bold text-red-800">Learning</span>
        </h2>
        <div className="py-4 grid grid-cols-1 gap-2 tablet:grid-cols-3">
          <Link to="/experiments/personalwebsitev1" className="col-span-1">
            <ArticleCard image={personalwebsite} description="Revisiting CSS and Design after more than a decade" />
          </Link>
          <Link to="/learning/ajourneyfrompapertodigital" className="col-span-1">
            <ArticleCard image={tkssir} description="A Journey from Paper to Digital" />
          </Link>
        </div>
      </section>
    </>
  )
};

export default Home;