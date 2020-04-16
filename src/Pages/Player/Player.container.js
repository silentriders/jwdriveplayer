import React, { useEffect, useState } from 'react';
import PlayerComponent from './Player.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';
import Assets from '../../Assets';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';

const PlayerContainer = props => {
  const [dataMovie, setDataMovie] = useState({
    movie: {
      image: Assets.no_preview.image2
    },
    sources: [
      {
        file: Assets.no_preview.video,
        label: 'Not found',
        type: 'video/mp4',
        default: true
      }
    ],
    subtitles: [],
    download: {}
  });

  useEffect(() => {
    const getMovie = async () => {
      await Jwplayer.GET_MOVIE(props.match.params.id).then(async movie => {
        let subtitles = [];
        let sources = [];
        let download = {};
        movie.subtitles.map(subtitle => {
          subtitles.push({
            kind: 'captions',
            file: `https://cors-anywhere.herokuapp.com/${subtitle.file}`,
            label: subtitle.label
          });
        });
        await Jwplayer.GET_SOURCE(movie.driveId).then(async source => {
          if (isEmpty(source.sources)) {
            sources.push({
              file: source.download.url,
              label: 'Original',
              type: 'video/mp4'
            });
          } else {
            source.sources.map(source => {
              sources.push({
                file: source.file,
                label: source.label,
                type: 'video/mp4'
              });
            });
          }
          download = source.download;
          setDataMovie({
            movie,
            sources,
            subtitles,
            download
          });
        });
      });
    };
    getMovie();
  }, []);
  // console.log(dataMovie);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{dataMovie?.movie?.title ?? 'Play Movie'} - Jwdriveplayer</title>
      </Helmet>
      <PlayerComponent dataMovie={dataMovie} />
    </div>
  );
};

export default PlayerContainer;
