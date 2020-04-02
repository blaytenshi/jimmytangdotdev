import React from 'react';
import me from './assets/img/me.jpeg';
// import { ReactComponent as ChatLogo } from "./assets/img/chat.svg";
import { ReactComponent as TwitterLogo } from "./assets/img/twitter.svg";
import { ReactComponent as GmailLogo } from "./assets/img/gmail.svg";
import { ReactComponent as LinkedInLogo } from "./assets/img/linkedin.svg";
import { ReactComponent as GithubLogo } from "./assets/img/github.svg";
import Twemoji from "./components/Twemoji";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-openSans border-t-8 border-red-600">
      <header className="flex flex-row justify-center py-8 border-b border-red-500">
        <div className="flex flex-col mobile:w-full items-center justify-center laptop:w-2/5">
          <div className="w-64 pt-10 laptop:hidden">
            <img className="rounded-full border border-red-500 p-1" src={me} alt="Jimmy Tang" />
          </div>
          <h1 className="text-5xl laptop:text-7xl">
            <span className="font-extrabold text-red-600">jimmy</span>
            <span className="font-bold text-red-800">tang</span>
          </h1>
          <p className="text-3xl font-medium text-gray-700 text-center">Software Developer</p>
        </div>
        <div className="w-48 hidden laptop:block">
          <img className="rounded-full border object-cover object-center border-red-500 p-1" src={me} alt="Jimmy Tang" />
        </div>
      </header>
      <section className="px-8 py-12 border-b border-red-500">
        <p className="mobile:text-xl tablet:text-xl font-bold">Hi! <Twemoji emoji="😀" /> My name is Jimmy and I'm a software developer Sydney, Australia. I currently specialise in Front End Web Development but also have experience in</p>   
      </section>
      <nav className="px-8 py-12 border-b border-red-500 tablet:flex tablet:justify-around tablet:flex-wrap tablet:content-around">
        <button className="btn mobile:text-2xl mobile:w-full tablet:w-64">About Me</button>
        <button className="btn mobile:text-2xl mobile:w-full tablet:w-64">Experience</button>
        <button className="btn mobile:text-2xl mobile:w-full tablet:w-64">Portfolio</button>
        <button className="btn mobile:text-2xl mobile:w-full tablet:w-64">Connect</button>
      </nav>
      <main>
        <section className="px-8 py-12 border-b border-red-500">
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">About</span>
            <span className="font-bold text-red-800">Me</span>
          </h2>
          <p className="text-lg tablet:text-xl">I'm an pretty cool guy and doesn't afraid of anything</p>
        </section>
        <section className="px-8 py-12 border-b border-red-500">
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">My</span>
            <span className="font-bold text-red-800">Experience</span>
          </h2>
        </section>
        <section className="px-8 py-12 border-b border-red-500">
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">My</span>
            <span className="font-bold text-red-800">Portfolio</span>
          </h2>
        </section>
        <section className="px-8 py-12 border-b border-red-500">
          <h2 className="text-3xl">
            <span className="font-extrabold text-red-600">Contact</span>
            <span className="font-bold text-red-800">Me</span>
          </h2>
          <p className="text-lg">Want to get in touch? Feel free to email or reach out on one of my socials below!</p>
          <div className="py-8 flex justify-around">
            <GmailLogo className="h-10" />
            <TwitterLogo className="h-10" />
            <LinkedInLogo className="h-10" />
            <GithubLogo className="h-10" />
          </div>
        </section>
      </main>
      <footer className="bg-red-600 py-8 mobile:p-4">
        <p className="text-white">© Jimmy Tang 2020</p>
      </footer>
    </div>
  );
}

export default App;
