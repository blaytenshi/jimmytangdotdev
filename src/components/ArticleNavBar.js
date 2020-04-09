import React from "react";
import { useHistory } from "react-router-dom";

const ArticleNavBar = () => {
  
  let history = useHistory();
  
  return (
    <div>
      <a className="text-red-500 underline" onClick={() => history.goBack()}>Back</a>
    </div>
  )
};

export default ArticleNavBar;