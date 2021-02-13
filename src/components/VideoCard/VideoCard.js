import { Avatar } from '@material-ui/core';
import React from 'react';
import style from './VideoCard.module.css';

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className={style.video_card}>
      <img className={style.video_card_thumbnail} src={image} alt="" />
      <div className={style.video_card_info}>
        <Avatar
          className={style.video_card_avatar}
          src={channelImage}
          alt={channel}
        />
        <div className={style.video_card_text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
