import React from 'react';
import me from './assets/img/me.jpeg';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-openSans">
      <header className="flex flex-row justify-center border-t-8 border-red-600">
        <div className="flex flex-col mobile:w-full items-center laptop:w-2/5">
          <div className="w-64 pt-10 laptop:hidden">
            <img className="rounded-full border border-red-500 p-1" src={me} alt="Jimmy Tang" />
          </div>
          <h1 className="mobile:text-5xl">
            <span className="font-extrabold text-red-600">jimmy</span>
            <span className="font-bold text-red-800">tang</span>
          </h1>
          <p className="text-3xl font-medium text-gray-700 text-center">Software Developer</p>
        </div>
        <div className="w-48 hidden laptop:block">
          <img className="rounded-full border object-cover object-center border-red-500 p-1" src={me} alt="Jimmy Tang" />
        </div>
      </header>
      <section className="text-xl">
        Hi my name is Jimmy Tang a 
      </section>
      <nav className="mx-8 pb-32 border-b border-gray-500">
        <button className="btn sm:text-2xl sm:w-full md:w-64">About Me</button>
        <button className="btn sm:text-2xl sm:w-full md:w-64">My Experiences</button>
        <button className="btn sm:text-2xl sm:w-full md:w-64">Portfolio</button>
      </nav>
      <main>
        <p>blah blah</p>
      </main>
      <footer className="bg-red-600">
        <div className="container mx-auto py-8 sm:p-4">
          <p className="text-white">© Jimmy Tang 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
