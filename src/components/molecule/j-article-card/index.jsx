import StyledArticleCardWrapper, {
  StyledArticleCardImage,
  StyledArticleCardDescriptionWrapper,
  StyledArticleCardDescription,
} from './styles.js';

const JArticleCard = ({toggleHover, isHovered, image, description, onClick}) => {
  return (
    <StyledArticleCardWrapper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
    >
      <StyledArticleCardImage src={image} alt={description} isHovered={isHovered} />
      <StyledArticleCardDescriptionWrapper isHovered={isHovered}>
        <StyledArticleCardDescription isHovered={isHovered}>{description}</StyledArticleCardDescription>
      </StyledArticleCardDescriptionWrapper>
    </StyledArticleCardWrapper>
  );
};

export default JArticleCard;
