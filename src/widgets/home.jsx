import JSeparator from '../components/atom/j-separator/index.jsx';
import SelfIntroduction from './self-introduction.jsx';
import MyWork from './my-work.jsx';
import MyLearning from './my-learning.jsx';
import MenuBar from './menu-bar.jsx';

const Home = () => {
  return (
    <>
      <MenuBar />
      <JSeparator />
      <SelfIntroduction />
      <JSeparator />
      <MyWork />
      <JSeparator />
      <MyLearning />
    </>
  );
};

export default Home;
