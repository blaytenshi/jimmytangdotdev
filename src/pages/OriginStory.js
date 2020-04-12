import React from "react";
import PictureCarousel from "../components/PictureCarousel";
import Twemoji from "../components/Twemoji";
import ArticleNavBar from "../components/ArticleNavBar";

const OriginStory = () => {
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4">
      <ArticleNavBar/>
      <article>
        <h2 className="text-3xl pb-2">
          <span className="font-extrabold text-red-600">Origin</span>
          <span className="font-bold text-red-800">Story</span>
        </h2>
        <p className="py-2">
          I’ve always been fascinated with computers as a child. From gaming to the Internet. Having been exposed to
          web development since high school, I decided to pursue an engineering degree. From there I took up a
          scholarship funded intern position at Thales Australia working on some of their training simulators.
        </p>
        <p className="py-2">
          Upon graduation I settled on a graduate role at a Mint Payments, a small payments processing start up. At
          Mint, I worked on their monolithic web applications built with JSP, Spring and PHP before finally making a
          jump to UTS to work on various projects ranging from IoT to 3D Printing.
        </p>
        <p className="py-2">
          Despite the focus on more hardware based projects, the web had never left my heart. At UTS, I taught myself
          React and the nuances of Javascript, diving ever deeper into web development. My crowning achievement there;
          the TKSSIR, an app designed to assist the Stay Kind Foundation in providing assistance to the youths and the
          homeless in Sydney’s streets.
        </p>
        <p className="pt-2 pb-4">
          In summer of 2019, I decided to jump back into the world of fintech. Joining Grow, a superannuation
          disruptor startup with the goal of building a better, blockchain-based superannuation administration
          platform for the betterment of all retiring Australians.
        </p>
        <PictureCarousel/>
        <p className="pt-2">
          Besides my passion in software and technology, I'm also:
        </p>
        <ul className="px-4 py-2">
          <li><Twemoji emoji="📸"/><span className="ml-4">An avid photographer</span></li>
          <li><Twemoji emoji="🛫"/><span className="ml-4">An adventurous traveller</span></li>
          <li><Twemoji emoji="🍽️"/><span className="ml-4">A forever hungry foodie</span></li>
          <li><Twemoji emoji="🏋️‍♂️"/><span className="ml-4">A fitness junkie</span></li>
          <li><Twemoji emoji="🎮"/><span className="ml-4">A casual gamer</span></li>
        </ul>
        <p>
          This website is a place for me to tinker with code and maybe a place to hold my thoughts in the future.
        </p>
      </article>
    </div>
  )
};

export default OriginStory