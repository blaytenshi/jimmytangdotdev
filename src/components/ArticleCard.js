import React, { useState } from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ image, description }) => {
  
  const [ hovered, setHovered ] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  
  return (
    <div 
      className="relative w-full overflow-hidden" 
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={image} className={`h-64 object-cover w-full transition transform duration-200 ${hovered ? 'scale-110' : ''} object-top`} />
      <div className={`absolute bottom-0 bg-white w-full transition opacity duration-200 ${hovered ? 'opacity-90' : 'opacity-60'}`}>
        <p className={`px-4 py-2 font-bold ${hovered ? 'text-red-600' : ''}`}>{description}</p>
      </div>
    </div>
  )
};

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ArticleCard;