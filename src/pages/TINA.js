import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";
import tina from "../assets/img/tina.png";

const TINA = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6 text-gray-700">
      <ArticleNavBar/>
      <article>
        <h2>A Next Generation Superannuation Administration Platform</h2>
        <img src={tina} className="article-hero" />
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
            Vue, Node.js, Koa, Tailwind CSS, VueX, Vue Router, SCSS, Echarts 
          </p>
        </section>
      </article>
    </div>
  )
};

export default TINA;