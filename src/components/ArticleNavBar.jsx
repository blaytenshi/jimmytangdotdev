import {useNavigate} from 'react-router-dom';
import {ReactComponent as Back} from '../assets/icons/back.svg';

const ArticleNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4">
      <button className="link text-xl flex items-center" onClick={() => navigate('/')}>
        <Back className="h-6" />
        <span className="pl-2">Home</span>
      </button>
    </div>
  );
};

export default ArticleNavBar;
