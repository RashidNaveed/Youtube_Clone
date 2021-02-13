import React from 'react';
import { Button, Divider } from '@material-ui/core';
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAlt,
  ExpandMore,
} from '@material-ui/icons';
import style from './Sidebar.module.css';

const Sidebar = ({ isLarge }) => {
  return isLarge ? (
    <div className={style.container}>
      <div className={style.links_button}>
        <Button className={style.button}>
          <Home className={style.button_icon} /> Home
        </Button>
        <Button className={style.button}>
          <Whatshot className={style.button_icon} /> Trending
        </Button>
        <Button className={style.button}>
          <Subscriptions className={style.button_icon} /> Subscriptions
        </Button>
      </div>
      <Divider />
      <div className={style.links_button}>
        <Button className={style.button}>
          <VideoLibrary className={style.button_icon} /> Library
        </Button>
        <Button className={style.button}>
          <History className={style.button_icon} /> History
        </Button>
        <Button className={style.button}>
          <OndemandVideo className={style.button_icon} /> Your Videos
        </Button>
        <Button className={style.button}>
          <WatchLater className={style.button_icon} /> WatchLater
        </Button>
        <Button className={style.button}>
          <ThumbUpAlt className={style.button_icon} /> Liked Videos
        </Button>
        <Button className={style.button}>
          <ExpandMore className={style.button_icon} /> Show More
        </Button>
      </div>
    </div>
  ) : (
    <div className={style.small_container}>
      <Button
        classes={{ root: style.small_button, label: style.small_button_label }}
      >
        <Home className={style.small_button_icon} /> Home
      </Button>
      <Button
        classes={{ root: style.small_button, label: style.small_button_label }}
      >
        <Whatshot className={style.small_button_icon} /> Trending
      </Button>
      <Button
        classes={{ root: style.small_button, label: style.small_button_label }}
      >
        <Subscriptions className={style.small_button_icon} /> Subscriptions
      </Button>
      <Button
        classes={{ root: style.small_button, label: style.small_button_label }}
      >
        <VideoLibrary className={style.small_button_icon} /> Library
      </Button>
    </div>
  );
};

export default Sidebar;
