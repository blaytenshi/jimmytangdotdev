import React from "react";
import { Route, Switch } from "react-router-dom";

import {ReactComponent as GmailLogo} from "./assets/img/gmail.svg";
import {ReactComponent as TwitterLogo} from "./assets/img/twitter.svg";
import {ReactComponent as LinkedInLogo} from "./assets/img/linkedin.svg";
import {ReactComponent as GithubLogo} from "./assets/img/github.svg";
import me from "./assets/img/me.jpg";

import TKSSIR from "./pages/TKSSIR";
import Home from "./pages/Home";
import OriginStory from "./pages/OriginStory";
import PersonalWebsite from "./pages/PersonalWebsite";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="border-t-8 border-red-600 min-h-screen font-openSans flex flex-col">
      {/*<div className="w-16 h-16 fixed right-0 bg-blue-500"></div>*/}
      <header className="container mx-auto flex justify-center w-full py-8 laptop:justify-around laptop:w-3/5 max-w-screen-laptop">
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
      <main className="container mx-auto laptop:w-3/5 max-w-screen-laptop flex-grow">
        <Switch>
          <Route path="/originstory" component={OriginStory} />
          <Route path="/work/tkssir" component={TKSSIR} />
          <Route path="/work/personalwebsitev1" component={PersonalWebsite} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      <footer className="bg-red-600 text-white">
        <div className="container mx-auto py-8 p-4 laptop:w-3/5 max-w-screen-laptop">
          <p>© Jimmy Tang 2020</p>
          <div className="py-8 flex justify-around">
            <GmailLogo className="h-10 social" onClick={() => window.location.href = 'mailto:jimmy.gj.tang@gmail.com'}/>
            <TwitterLogo className="h-10 social" onClick={() => window.open('https://twitter.com/jimmytangdev')}/>
            <LinkedInLogo className="h-10 social" onClick={() => window.open('https://www.linkedin.com/in/jimmygjtang/')}/>
            <GithubLogo className="h-10 social"/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
