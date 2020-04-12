import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Back } from "../assets/img/back.svg"

const ArticleNavBar = () => {
  
  let history = useHistory();
  
  return (
    <div className="py-4">
      <button className="text-red-500 underline text-xl flex items-center" onClick={() => history.push("/")}>
        <Back className="h-6" />
        <span className="pl-2">Home</span>
      </button>
    </div>
  )
};

export default ArticleNavBar;