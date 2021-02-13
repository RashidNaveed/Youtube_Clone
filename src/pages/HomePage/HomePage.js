import RecommendedVideos from '../../components/RecomendedVideos/RecommendedVideos';
import Sidebar from '../../components/Sidebar/Sidebar';
import style from './HomePage.module.css';

const HomePage = ({ isLarge }) => {
  return (
    <div className={style.app_page}>
      <Sidebar isLarge={isLarge} />
      <RecommendedVideos />
    </div>
  );
};

export default HomePage;
