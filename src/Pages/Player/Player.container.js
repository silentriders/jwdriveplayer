/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
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
    console.log(
      '%cStop!',
      'color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold'
    );
    console.log(
      '%cWhy you wanna see my systems ?',
      'color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold'
    );
    console.log(
      '%cLets code together dude... Dont hacking or hijacking, hacker ethic know attitude',
      'color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold'
    );
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
          if (!isEmpty(source.sources)) {
            source.sources.map(source => {
              sources.push({
                file: source.file,
                label: source.label,
                type: 'video/mp4'
              });
            });
          } else {
            await Jwplayer.GET_SOURCE(movie.backupDriveId[0]).then(async backupSource => {
              download = backupSource.download
              if (isEmpty(backupSource.sources)) {
                sources.push({
                  file: backupSource.download.url,
                  label: 'Original',
                  type: 'video/mp4'
                });
              } else {
                backupSource.sources.map(source => {
                  sources.push({
                    file: source.file,
                    label: source.label,
                    type: 'video/mp4'
                  });
                });
              }
            });
          }
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
