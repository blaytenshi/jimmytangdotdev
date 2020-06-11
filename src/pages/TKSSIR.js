import React from "react";
import { Link } from "react-router-dom";

import ArticleNavBar from "../components/ArticleNavBar";
import tkssir from "../assets/img/tkssir.png";
import Twemoji from "../components/Twemoji";

const TKSSIR = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4 px-6">
      <ArticleNavBar/>
      <article>
        <h2>TK SSIR: Helping reduce alcohol related violence in Sydney</h2>
        <img src={tkssir} className="article-hero" alt="TK SSIR: Helping reduce alcohol related violence in Sydney" />
        <section>
          <p>
            The Stay Kind Foundation (then known as the Thomas Kelly Foundation) is a charity foundation that ran a 
            program called Take Kare. The program's focus is to reduce alcohol related violence across various 
            nightlife hotspots across the city of Sydney. The program achieves this by deploying teams of volunteer 
            patrols as well as setting up "Safe Space" tents whereby they can provide help and first aid to those in 
            need. These initiatives render assistance to tens of thousands of youths and homeless every year, helping 
            them reach home, reconnect with family or find safety after a night out.
          </p>
          <p>
            In partnership with UTS:Rapido, the foundation commissioned the development of an application that would 
            support them in the collection of anonymous client data. This data, which was initially being collected on 
            paper forms and processed each week, was to help the foundation better understand where to deploy their 
            teams and how better to utilise their resources. And so, the Take Kare Safe Space and Incident Reporting 
            (SSIR) System was born.
          </p>
          <p>
            The SSIR System allowed team members to log in and record information about how their incident unfolded and 
            the assistance rendered to related clients much like their paper forms but in a much more sophisticated 
            manner. The SSIR System also allowed team leaders to review the incidents being logged by other team 
            members and provide corrections as needed. It also featured a real time manual tally of clients being 
            supported in the Safe Spaces located throughout the city that can be seen by all members of the team. 
            Finally the system also featured a report generation system that would collate the reported incidents 
            at the end of each shift for the leaders of the program for insights and organisational reporting.
          </p>
          <p>
            For more details, read on in&nbsp;
            <Link className="link" to="/learnings/ajourneyfrompapertodigital">
              TKSSIR: A Journey from Paper to Digital
            </Link>
          </p>
        </section>
        <section>
          <h3>Technology</h3>
          <p>
            React, React Router, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Functions, Semantic UI
          </p>
        </section>
        <section>
          <h3>Media</h3>
          <ul>
            <li><Twemoji emoji="📰" />
              <a 
                className="link" 
                href="http://thomaskellyyouthfoundation.org.au/take-kare-safe-space">
                About the Take Kare Program
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
};

export default TKSSIR;