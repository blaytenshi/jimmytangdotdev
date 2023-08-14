import { useState } from 'react';
import JArticleCard from '../../components/molecule/j-article-card/index.jsx';

const SmartArticleCard = ({ image, description, handleClick }) => {
  const [ hovered, setHovered ] = useState(false);
  const toggleHover = () => setHovered((prevState) => (!prevState));

  return (
    <JArticleCard
      image={image}
      description={description}
      toggleHover={toggleHover}
      isHovered={hovered}
      onClick={handleClick}
    />
  );
};

export default SmartArticleCard;
