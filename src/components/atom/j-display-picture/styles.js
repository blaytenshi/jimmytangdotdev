import { styled } from 'styled-components';
import { getTheme } from "../../../utils/index.js";

const StyledDisplayPicture = styled.img`
  border: 1px solid ${getTheme("colors", "displayPicture", "border" )};
  padding: 0.25rem;
  border-radius: 9999px;
  object-position: center;
  object-fit: cover;
`

export default StyledDisplayPicture
