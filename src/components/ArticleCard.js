import React from "react";
import me from "../assets/img/me.jpg";

const ArticleCard = () => {
  return (
    <div className="relative">
      <img src={me} />
      <div className="absolute bottom-0 bg-white w-full">
        <p className="px-4 py-2">Going from Paper to Digital</p>
      </div>
    </div>
  )
}

export default ArticleCard;