import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import Twemoji from "../components/Twemoji";
import ArticleNavBar from "../components/ArticleNavBar";
import ArticleCard from "../components/ArticleCard";

const Home = () => {

  const history = useHistory();

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const myWorkRef = useRef(null);
  const myLearningRef = useRef(null);

  return (
    <>
      <nav className="px-8 pb-4 border-b border-red-500 flex mobile:flex-col tablet:flex-row">
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
          collaborative teams, take a look at my <a href="#" className="text-red-500 underline">resume</a> and come say
          Hi! <Twemoji emoji="👋"/>
        </p>
      </section>
      <section className="px-8 py-12 border-b border-red-500" ref={myWorkRef}>
        <h2 className="text-3xl">
          <span className="font-extrabold text-red-600">My</span>
          <span className="font-bold text-red-800">Work</span>
        </h2>
        <div className="grid tablet:grid-cols-2">
          <Link to="/work/tkssir">
            <ArticleCard/>
          </Link>
          <div className="bg-red-500 col-span-1">hi</div>
          <div className="bg-green-500 col-span-1 tablet:col-span-2">hi</div>
        </div>
        
          <h3 className="text-2xl text-red-800 font-bold">TK SSIR</h3>
        <article>
          <h3 className="">TINA</h3>
        </article>
      </section>
      <section className="px-8 py-12" ref={myLearningRef}>
        <h2 className="text-3xl">
          <span className="font-extrabold text-red-600">My</span>
          <span className="font-bold text-red-800">Learning</span>
        </h2>
        <Link to="/work/tkssir">
          <h3 className="text-2xl text-red-800 font-bold">TK SSIR</h3>
        </Link>
        <article>
          <h3 className="">TINA</h3>
        </article>
      </section>
    </>
  )
}

export default Home;