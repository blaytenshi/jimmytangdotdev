import React from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ image, description }) => {
  return (
    <div className="relative w-full">
      <img src={image} className="h-64 object-cover w-full"/>
      <div className="absolute bottom-0 bg-white w-full opacity-75">
        <p className="px-4 py-2">{description}</p>
      </div>
    </div>
  )
};

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ArticleCard;