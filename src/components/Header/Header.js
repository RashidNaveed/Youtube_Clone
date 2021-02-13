import React from 'react';
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from '@material-ui/icons';
import style from './Header.module.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = ({ isLarge, setIsLarge, searchInput, setSearchInput }) => {
  return (
    <div className={style.container}>
      <div className={style.container_left}>
        <Menu className={style.icon} onClick={() => setIsLarge(!isLarge)} />
        <Link to="/">
          <img
            className={style.youtube_logo}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
          />
        </Link>
      </div>
      <div className={style.container_input}>
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Link to={searchInput.length > 0 ? `/search/${searchInput}` : ''}>
          <Search
            titleAccess="Search"
            className={style.container_input_button}
          />
        </Link>
      </div>
      <div className={style.container_right}>
        <VideoCall className={style.container_right_icons} />
        <Apps className={style.container_right_icons} />
        <Notifications className={style.container_right_icons} />
        <Avatar
          alt="Rashid"
          src="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo "
        />
      </div>
    </div>
  );
};

export default Header;
