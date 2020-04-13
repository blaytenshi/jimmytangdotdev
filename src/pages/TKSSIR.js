import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";

const TKSSIR = () => {

  // Scroll yo'self back to the top if you scrolled down in the previous screen
  window.scrollTo(0,0);
  
  return (
    <div className="container mx-auto body-text border-t border-red-500 pt-4">
      <ArticleNavBar/>
      <article>
        <h2 className="text-3xl font-bold text-red-600">Going from Paper to Digital</h2>
        <section>
          <h3 className="text-2xl font-bold text-gray-700">Background</h3>
          <p className="py-2">
            The Stay Kind Foundation (then known as the Thomas Kelly Foundation) is a charity foundation that ran a 
            program called Take Kare. The program deploy teams and safe spaces in various nightlife hotspots across 
            the city of Sydney on weekends. Their volunteer teams render assistance to tens of thousands of youths and 
            homeless every year, helping them reach home, reconnect with family or find safety every weekend.
          </p>
          <p className="py-2">
            In partnership with UTS:Rapido, the foundation commissioned the development of an application that would 
            support them in the collection of anonymous client data that needed to be hand filled, collected and 
            processed at the end of each shift. This collected data was to help the foundation understand where better 
            to deploy their teams and how better to utilise their resources.
          </p>
          <h3 className="text-2xl font-bold text-gray-700">Thoughts</h3>
          <p className="py-2">
            This section is currently in progress! Stay tuned!
          </p>
          <h3 className="text-2xl font-bold text-gray-700">Technology</h3>
          <p className="py-2">
            React, React Router, Redux, Redux-Forms, Firebase, Google Cloud Platform, Firebase Functions, Semantic UI
          </p>
        </section>
      </article>
    </div>
  )
};

export default TKSSIR;