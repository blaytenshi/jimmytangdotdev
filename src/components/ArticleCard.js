import React from "react";
import me from "../assets/img/me.jpg";

const ArticleCard = () => {
  return (
    <div className="relative w-full">
      <img src={me} className="h-64 object-cover w-full"/>
      <div className="absolute bottom-0 bg-white w-full opacity-75">
        <p className="px-4 py-2">Going from Paper to Digital</p>
      </div>
    </div>
  )
}

export default ArticleCard;