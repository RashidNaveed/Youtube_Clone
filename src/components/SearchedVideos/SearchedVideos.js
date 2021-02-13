import { Divider } from '@material-ui/core';
import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import style from './SearchedVideos.module.css';

const SearchedVideos = () => {
  return (
    <div className={style.container}>
      <div className={style.search_page_filter}>
        <TuneOutlined />
        <h1>Filter</h1>
      </div>
      <Divider />
      <ChannelRow
        channelName="Developers Hub"
        image="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        noOfSubscribers="657K"
        verified={true}
        noOfVideos="302"
        description="You can find awesome React JS tutorials here. Also, expect programming tips and tricks that will take your coding skills to next level. Please Subscribe the channel for latest updates"
      />
      <Divider />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
      <VideoRow
        title="Become a React JS Developer"
        views="2.3M"
        timestamp="3 days ago"
        channelImage="https://yt3.ggpht.com/yti/ANoDKi73Q9GjsquKTrg-JdbYMisvPilkso94x5c_pdYAPA=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Developers Hub"
        image="https://i.ytimg.com/vi/EkOB0LFQJAw/maxresdefault.jpg"
        noOfSubscribers="557K"
        description="Do you want a Free crouse to learn React JS just click and watch to be a good developer"
      />
    </div>
  );
};

export default SearchedVideos;
