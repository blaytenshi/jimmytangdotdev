import React, {useRef} from 'react';
import me from './assets/img/me.jpeg';
// import { ReactComponent as ChatLogo } from "./assets/img/chat.svg";
import {ReactComponent as TwitterLogo} from "./assets/img/twitter.svg";
import {ReactComponent as GmailLogo} from "./assets/img/gmail.svg";
import {ReactComponent as LinkedInLogo} from "./assets/img/linkedin.svg";
import {ReactComponent as GithubLogo} from "./assets/img/github.svg";
import Twemoji from "./components/Twemoji";

function App() {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const aboutMeRef = useRef(null);
  const myExperienceRef = useRef(null);
  const myPortfolioRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className="border-t-8 border-red-600 min-h-screen font-openSans flex flex-col">
      {/*<div className="w-16 h-16 fixed right-0 bg-blue-500"></div>*/}
      <header className="container mx-auto flex justify-center w-full py-8 border-b border-red-500 laptop:justify-around laptop:w-3/5 max-w-screen-laptop">
        <div className="flex flex-col items-center justify-center">
          <div className="w-64 pt-10 laptop:hidden">
            <img className="rounded-full border border-red-500 p-1" src={me} alt="Jimmy Tang"/>
          </div>
          <h1 className="text-5xl laptop:text-7xl">
            <span className="font-extrabold text-red-600">jimmy</span>
            <span className="font-bold text-red-800">tang</span>
          </h1>
          <p className="text-3xl font-medium text-gray-700 text-center">Software Developer</p>
        </div>
        <div className="w-48 hidden laptop:block flex-shrink-0">
          <img className="rounded-full border object-cover object-center border-red-500 p-1" src={me} alt="Jimmy Tang"/>
        </div>
      </header>
      <section className="container mx-auto px-8 py-12 border-b border-red-500 laptop:w-3/5 max-w-screen-laptop">
        <p className="text-xl font-bold text-center">Hi! <Twemoji emoji="😀"/> My name is Jimmy and I'm a software developer from Sydney, Australia. I currently specialise in Front End Web Development but also have experience in various aspects of software development such as testing, server side APIs and so on! This website isn't finished yet... but come back soon!</p>
      </section>
      <nav className="container mx-auto px-8 py-12 border-b border-red-500 flex flex-col w-full laptop:flex-row laptop:w-3/5 laptop:justify-between max-w-screen-laptop">
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(aboutMeRef)}>About Me</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(myExperienceRef)}>My Experience</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(myPortfolioRef)}>My Portfolio</button>
        <button className="btn m-2 text-2xl w-full laptop:text-sm" onClick={() => scrollToRef(contactMeRef)}>Contact Me</button>
      </nav>
      <main className="container mx-auto laptop:w-3/5 max-w-screen-laptop">
        <section className="px-8 py-12 border-b border-red-500" ref={aboutMeRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">About</span>
            <span className="font-bold text-red-800">Me</span>
          </h2>
          <p className="text-lg tablet:text-xl">I'm an pretty cool guy and doesn't afraid of anything</p>
        </section>
        <section className="px-8 py-12 border-b border-red-500" ref={myExperienceRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">My</span>
            <span className="font-bold text-red-800">Experience</span>
          </h2>
        </section>
        <section className="px-8 py-12 border-b border-red-500" ref={myPortfolioRef}>
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">My</span>
            <span className="font-bold text-red-800">Portfolio</span>
          </h2>
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
      <footer className="bg-red-600 text-white">
        <div className="container mx-auto py-8 p-4 laptop:w-3/5 max-w-screen-laptop">
          <p>© Jimmy Tang 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
