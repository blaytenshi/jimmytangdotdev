import JMenuBar from '../components/molecule/j-menu-bar/index.jsx';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const MenuBar = () => {
  const navigate = useNavigate();
  const myWorkRef = useRef(null);
  const myLearningRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const navigateTo = (route) => {
    return navigate(route);
  };

  const scrollTo = (ref) => {
    return scrollToRef(ref);
  };

  return (
    <JMenuBar
      navigateOriginStory={() => navigateTo('/originstory')}
      navigateMyLearning={() => scrollTo(myLearningRef)}
      navigateMyWork={() => scrollTo(myWorkRef)}
    />
  );
};

export default MenuBar;
