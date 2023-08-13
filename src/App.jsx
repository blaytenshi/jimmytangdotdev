import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {ReactComponent as GmailLogo} from './assets/icons/gmail.svg';
import {ReactComponent as TwitterLogo} from './assets/icons/twitter.svg';
import {ReactComponent as LinkedInLogo} from './assets/icons/linkedin.svg';
import {ReactComponent as GithubLogo} from './assets/icons/github.svg';
import {ReactComponent as Sun} from './assets/img/sun.svg';
import {ReactComponent as Moon} from './assets/img/moon.svg';
import me from './assets/img/me.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    // check whether browser supports color-scheme checking
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // if so, would the user like darkmode?
      // console.log('🎉 Dark mode is supported');
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      // if doesn't support color-scheme checking, just give them light mode
      setDarkMode(false);
    }
  }, []);

  const handleTheme = () => {
    // console.log("current preferred scheme", darkMode ? "dark" : "light");
    // console.log("switch it!");
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'theme-dark' : 'theme-light'} border-t-8 border-red-600 min-h-screen font-openSans flex flex-col`}>
      <button className="w-16 h-16 fixed right-0 border-0 rounded-full" onClick={() => handleTheme()}>
        { darkMode ? <Moon /> : <Sun /> }
      </button>
      <header className="container mx-auto flex justify-center w-full py-8 laptop:justify-around laptop:w-3/5 max-w-screen-laptop">
        <div className="flex flex-col items-center justify-center">
          <div className="w-64 pt-6 laptop:hidden">
            <img className="rounded-full border border-red-500 p-1" src={me} alt="Jimmy Tang"/>
          </div>
          <h1 className="text-5xl laptop:text-6xl desktop:text-7xl">
            <span className="font-extrabold text-red-600">jimmy</span>
            <span className="font-bold text-red-800">tang</span>
          </h1>
          <p className="text-3xl font-medium text-center">Software Developer</p>
        </div>
        <div className="w-48 hidden laptop:block flex-shrink-0">
          <img className="rounded-full border object-cover object-center border-red-500 p-1" src={me} alt="Jimmy Tang"/>
        </div>
      </header>
      <main className="container mx-auto laptop:w-3/5 max-w-screen-laptop flex-grow">
        <Outlet />
      </main>
      <footer className="bg-red-600 text-white">
        <div className="flex flex-col items-center container mx-auto justify-between py-6 tablet:px-8 tablet:flex-row laptop:w-3/5 max-w-screen-laptop">
          <div className="mb-6 tablet:mb-0">© Jimmy Tang 2020</div>
          <div className="flex items-center">
            <GmailLogo className="mr-8 h-6 social" onClick={() => window.location.href = 'mailto:jimmy.gj.tang@gmail.com'}/>
            <TwitterLogo className="mr-8 h-6 social" onClick={() => window.open('https://twitter.com/thejimmytang')}/>
            <LinkedInLogo className="mr-8 h-6 social" onClick={() => window.open('https://www.linkedin.com/in/jimmygjtang/')}/>
            <GithubLogo className="h-6 social" onClick={() => window.open('https://github.com/blaytenshi')}/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
