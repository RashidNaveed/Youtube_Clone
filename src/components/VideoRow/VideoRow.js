import React from 'react';
import style from './VideoRow.module.css';

const VideoRow = ({
  image,
  title,
  channel,
  views,
  timestamp,
  description,
  noOfSubscribers,
}) => {
  return (
    <div className={style.video_card}>
      <img className={style.video_card_thumbnail} src={image} alt="" />
      <div className={style.video_card_info}>
        <h4>{title}</h4>
        <p className={style.video_card_headline}>
          {channel} •{' '}
          <span>
            <b>{noOfSubscribers}</b> Subscribers
          </span>{' '}
          {views} Views • {timestamp}
        </p>
        <p className={style.video_card_description}>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
