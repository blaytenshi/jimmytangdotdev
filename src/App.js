import React from 'react';
import me from './assets/img/me.jpeg';

function App() {
  return (
    <div className="flex flex-col">
      <header className="border-t-8 border-red-600">
        <div className="flex justify-center py-12">
          <div>
            <h1 className="text-6xl text-center py-4"><span className="font-bold text-red-600">jimmy</span><span className="font-medium text-red-800">tang</span></h1>
            <p className="text-3xl font-bold text-gray-800 py-4">Hi, I'm Jimmy! A Software Developer from Sydney, Australia!</p>
          </div>
          <div>
            <img className="h-48 rounded-full mx-auto border border-gray-500 p-1" src={me} />
          </div>
        </div>
      </header>
      <main>
        <p>blah blah</p>
      </main>
      <footer className="bg-red-600">
        <div className="container mx-auto py-8">
          <p className="text-white">Copyright 2020. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
