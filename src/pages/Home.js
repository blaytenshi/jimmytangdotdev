import React, {useRef} from "react";
import {Link} from "react-router-dom";

import Twemoji from "../components/Twemoji";
import PictureCarousel from "../components/PictureCarousel";
import {ReactComponent as GmailLogo} from "../assets/img/gmail.svg";
import {ReactComponent as TwitterLogo} from "../assets/img/twitter.svg";
import {ReactComponent as LinkedInLogo} from "../assets/img/linkedin.svg";
import {ReactComponent as GithubLogo} from "../assets/img/github.svg";

export default () => {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const aboutMeRef = useRef(null);
  const myExperienceRef = useRef(null);
  const myPortfolioRef = useRef(null);
  const contactMeRef = useRef(null);
  
  return (
    <>
      <section className="container mx-auto px-8 py-12 border-b border-red-500 laptop:w-3/5 max-w-screen-laptop intro-text">
        <p className="pb-8">
          Hi! My name is Jimmy and I'm a software developer from Sydney, Australia. I currently specialise in Front End Web Development but also have a variety of experience in all areas of software development from Product Design to API Integrations.
        </p>
        <p>
          I'm currently in search of my next role! <Twemoji emoji="👨🏻‍💻"/> If you have a need for an enthusiastic, energetic, web developer with a passion for building great user experiences in cross functional and collaborative teams, take a look at my <a href="#" className="text-red-500 underline">resume</a> and come say Hi! <Twemoji emoji="👋"/>
        </p>
      </section>
      <nav className="container mx-auto px-8 py-12 border-b border-red-500 flex flex-col w-full laptop:flex-row laptop:w-3/5 laptop:justify-between max-w-screen-laptop">
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(aboutMeRef)}>About Me</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(myExperienceRef)}>Origin Story</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(myPortfolioRef)}>My Work</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(contactMeRef)}>Contact Me</button>
      </nav>
      <main className="container mx-auto laptop:w-3/5 max-w-screen-laptop">
        <section className="px-8 py-12 border-b border-red-500" ref={aboutMeRef}>
          <h2 className="text-3xl pb-2">
            <span className="font-extrabold text-red-600">About</span>
            <span className="font-bold text-red-800">Me</span>
          </h2>
          <PictureCarousel />
          <p className="body-text pt-2">
            Besides my passion in software and technology, I'm also:
          </p>
          <ul className="body-text px-4 py-2">
            <li><Twemoji emoji="📸"/><span className="ml-4">An avid photographer</span></li>
            <li><Twemoji emoji="🛫"/><span className="ml-4">An adventurous traveller</span></li>
            <li><Twemoji emoji="🍽️"/><span className="ml-4">A forever hungry foodie</span></li>
            <li><Twemoji emoji="🏋️‍♂️"/><span className="ml-4">A fitness junkie</span></li>
            <li><Twemoji emoji="🎮"/><span className="ml-4">A casual gamer</span></li>
          </ul>
          <p className="body-text">This website is a place for me to tinker with code and maybe a place to hold my thoughts in the future.</p>
        </section>
        <section className="px-8 py-12 border-b border-red-500" ref={myExperienceRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">Origin</span>
            <span className="font-bold text-red-800">Story</span>
            <p className="body-text py-2">
              I’ve always been fascinated with computers as a child. From gaming to the Internet. Having been exposed to web development since high school, I decided to pursue an engineering degree. From there I took up a scholarship funded intern position at Thales Australia working on some of their training simulators.
            </p>
            <p className="body-text py-2">
              Upon graduation I settled on a graduate role at a Mint Payments, a small payments processing start up. At Mint, I worked on their monolithic web applications built with JSP, Spring and PHP before finally making a jump to UTS to work on various projects ranging from IoT to 3D Printing.
            </p>
            <p className="body-text py-2">
              Despite the focus on more hardware based projects, the web had never left my heart. At UTS, I taught myself React and the nuances of Javascript, diving ever deeper into web development. My crowning achievement there; the TKSSIR, an app designed to assist the Stay Kind Foundation in providing assistance to the youths and the homeless in Sydney’s streets.
            </p>
            <p className="body-text py-2">
              In summer of 2019, I decided to jump back into the world of fintech. Joining Grow, a superannuation disruptor startup with the goal of building a better, blockchain-based superannuation administration platform for the betterment of all retiring Australians.
            </p>
          </h2>
        </section>
        <section className="px-8 py-12 border-b border-red-500" ref={myPortfolioRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">My</span>
            <span className="font-bold text-red-800">Work</span>
          </h2>
          <Link to="/work/tkssir">
            <h3 className="text-2xl text-red-800 font-bold">TK SSIR</h3>
          </Link>
          <article>
            <h3 className="">TINA</h3>
          </article>
        </section>
        <section className="px-8 py-12" ref={contactMeRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">Contact</span>
            <span className="font-bold text-red-800">Me</span>
          </h2>
          <p className="text-lg">Want to get in touch? Feel free to email or reach out on one of my socials below!</p>
          <div className="py-8 flex justify-around">
            <GmailLogo className="h-10 social" onClick={() => window.location.href = 'mailto:jimmy.gj.tang@gmail.com'}/>
            <TwitterLogo className="h-10 social" onClick={() => window.open('https://twitter.com/jimmytangdev')}/>
            <LinkedInLogo className="h-10 social" onClick={() => window.open('https://www.linkedin.com/in/jimmygjtang/')}/>
            <GithubLogo className="h-10 social"/>
          </div>
        </section>
      </main>
    </>
  )
}