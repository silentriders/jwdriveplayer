import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import { isEmpty } from 'lodash';
import { WrapPlayer } from './Player.style';
import Assets from '../../Assets';
import { Spin } from 'antd';

const PlayerComponent = props => {
  const { dataMovie } = props;
  let poster = Assets.no_preview.image2;

  if (dataMovie?.movie?.image !== '') {
    poster = dataMovie?.movie?.image;
  }

  const playlist = [
    {
      title: !isEmpty(dataMovie.movie) && dataMovie.movie.title,
      image: poster,
      sources: dataMovie?.sources,
      // sources: [
      //   {
      //     file: dataMovie.download.url,
      //     label: 'Original',
      //     type: 'video/mp4',
      //     default: true
      //   }
      // ],
      tracks: dataMovie?.subtitles
    }
  ];


  return (
    <WrapPlayer>
      {/* <Spin size="large" tip="Please wait ..." style={{ marginTop: '15%' }} /> */}
      {isEmpty(dataMovie?.sources) ? (
        <Spin size="large" tip="Please wait ..." style={{ marginTop: '15%' }} />
      ) : (
        <ReactJWPlayer
          playerId="play"
          playerScript="https://cdn.jwplayer.com/libraries/wF6JZNTr.js"
          playlist={playlist}
          displaytitle={true}
        />
      )}
    </WrapPlayer>
  );
};

export default PlayerComponent;
