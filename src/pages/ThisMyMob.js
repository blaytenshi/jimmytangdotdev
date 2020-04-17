import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";
import thismymob from "../assets/img/tmm.png";

const ThisMyMob = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6 text-gray-700">
      <ArticleNavBar/>
      <article>
        <h2>A Safe Space for Indigenous Australians</h2>
        <img src={thismymob} className="article-hero"/>
        <section>
          <h4>Background</h4>
          <p>
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h4>Thoughts</h4>
          <p>
            This section is currently in progress! Stay tuned!
          </p>
        </section>
        <section>
          <h4>Technology</h4>
          <p>
            React, React Route, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Cloud Messaging, Firebase Functions, Semantic UI
          </p>
        </section>
      </article>
    </div>
  )
};

export default ThisMyMob;