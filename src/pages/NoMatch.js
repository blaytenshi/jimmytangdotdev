import React from "react";
import Twemoji from "../components/Twemoji";
import { useHistory } from "react-router-dom";

const NoMatch = () => {
  
  const history = useHistory();
  
  return (
    <section className="px-8 py-4 border-t body-text border-red-500">
      <h2 className="text-3xl font-extrabold text-red-600">Woops! <Twemoji emoji="🤔" /></h2>
      <p>Seems like there's nothing here! Did you copy/paste your link right? </p>
      <button className="btn" onClick={() => history.push("/")}>Get me back to the home page!</button>
    </section>
  )
}

export default NoMatch;