import React from "react";

const ThisMyMob = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container px-8 py-12 mx-auto laptop:w-3/5 max-w-screen-laptop">
      <article>
        <h2 className="text-3xl font-bold text-red-600">A Safe Space for Indigenous Australians</h2>
        <section className="px-2">
          <h3 className="text-2xl font-bold text-gray-700">Background</h3>
          <p>
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Thoughts</h3>
          <p>
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Technology</h3>
          <p>
            React, React Route, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Cloud Messaging, Firebase Functions, Semantic UI
          </p>
        </section>
      </article>
    </div>
  )
};

export default ThisMyMob;