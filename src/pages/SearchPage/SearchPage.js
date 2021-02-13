import React from 'react';
import SearchedVideos from '../../components/SearchedVideos/SearchedVideos';
import Sidebar from '../../components/Sidebar/Sidebar';
import style from './SearchPage.module.css';

const SearchPage = ({ isLarge }) => {
  return (
    <div className={style.app_page}>
      <Sidebar isLarge={isLarge} />
      <SearchedVideos />
    </div>
  );
};

export default SearchPage;
