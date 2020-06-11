import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";
import tina from "../assets/img/tina.png";

const TINA = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6">
      <ArticleNavBar/>
      <article>
        <h2>A Next Generation Superannuation Administration Platform</h2>
        <img src={tina} className="article-hero" alt="A Next Generation Superannuation Administration Platform" />
        <section>
          <p>
            Tina is Grow's attempt to revolutionise and disrupt the superannuation industry. The administration platform
            is built on distributed ledger technology with the sole aim of dramatically reducing the cost of running a
            superannuation administration system through automated processes. The distributed ledger technology 
            (Corda by R3) ensures all data is immutable and only permitted parties can access their relevant datasets
            through permissioning.
          </p>
          <p>
            The tina platform had a number of features that would be considered applications themselves. For example,
            it contained a case management system for handling customer requests. An automated Superstream system for 
            members wishing to roll in or out from other funds. A system for seeing and modifying a members investments 
            as well as managing a funds products. This in combination with the distributed ledger technology that 
            improves security, trust and transparency amongst all parties and allows them to pass the cost savings onto
            its members.
          </p>
        </section>
        <section>
          <h4>Technology</h4>
          <p>
            Vue, Node.js, Express Koa, Tailwind CSS, VueX, Vue Router, SCSS, Echarts 
          </p>
        </section>
      </article>
    </div>
  )
};

export default TINA;