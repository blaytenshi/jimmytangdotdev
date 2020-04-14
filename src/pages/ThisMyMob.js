import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";

const ThisMyMob = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6 text-gray-700">
      <ArticleNavBar/>
      <article>
        <h2 className="text-3xl font-bold text-red-600">A Safe Space for Indigenous Australians</h2>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Background</h3>
          <p className="py-2">
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Thoughts</h3>
          <p className="py-2">
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Technology</h3>
          <p className="py-2">
            React, React Route, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Cloud Messaging, Firebase Functions, Semantic UI
          </p>
        </section>
      </article>
    </div>
  )
};

export default ThisMyMob;