import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import React from 'react';
import style from './ChannelRow.module.css';

const ChannelRow = ({
  channelName,
  image,
  verified,
  noOfSubscribers,
  noOfVideos,
  description,
}) => {
  return (
    <div className={style.container}>
      <Avatar className={style.avatar} src={image} alt={channelName} />
      <div className={style.text}>
        <h4>
          {channelName} {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>
          {noOfSubscribers} Subscribers • {noOfVideos} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
