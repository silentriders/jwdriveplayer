import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import {isEmpty} from 'lodash'
import { WrapPlayer } from './Player.style';

const PlayerComponent = props => {
  const { dataMovie } = props;
  const poster = dataMovie?.movie?.image !== '' ? dataMovie?.movie?.image : `https://www.ecopetit.cat/wpic/mpic/101-1019747_passeio-das-aguas-cinema.jpg`

  const playlist = [{
    title: !isEmpty(dataMovie.movie) && dataMovie.movie.title,
    image: poster,
    sources: dataMovie?.sources,
    // sources: [{
    //   file: !isEmpty(dataMovie.download) && dataMovie.download.url,
    //   label: 'tes',
    //   mimeType: 'video/mp4',
    //   type: 'mp4',
    //   default: true
    // }],
    tracks: dataMovie?.subtitles
  }];

  return (
    <WrapPlayer>
     {<ReactJWPlayer
        playerId='play'
        playerScript='https://cdn.jwplayer.com/libraries/wF6JZNTr.js'
        playlist={playlist}
        displaytitle={true}
      />}
    </WrapPlayer>
  );
};

export default PlayerComponent;
