import React from "react";
import ArticleNavBar from "../components/ArticleNavBar";

const TKSSIR = () => {
  return (
    <div className="container px-8 py-12 mx-auto laptop:w-3/5 max-w-screen-laptop">
      <article>
        <h2 className="text-3xl font-bold text-red-600">Going from Paper to Digital</h2>
        <section className="px-2">
          <h3 className="text-2xl font-bold text-gray-700">Background</h3>
          <p>
            The Stay Kind Foundation (then known as the Thomas Kelly Foundation) is a charity foundation that ran a program called Take Kare. The program deploy teams and safe spaces in various nightlife hotspots across the city of Sydney on weekends. Their volunteer teams render assistance to tens of thousands of youths and homeless every year, helping them reach home, reconnect with family or find safety every weekend. In partnership with UTS:Rapido, the foundation commissioned the development of an application that would support them in the collection of anonymous client data that needed to be hand filled, collected and processed at the end of each shift. This collected data was to help the foundation understand where better to deploy their teams and how better to utilise their resources.
          </p>
        </section>
      </article>
    </div>
  )
};

export default TKSSIR;