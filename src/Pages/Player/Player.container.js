/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PlayerComponent from './Player.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';
import Assets from '../../Assets';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';
import Constants from '../../Config/Constants';
import { WrapPlayer } from './Player.style';
import { Spin } from 'antd';

const PlayerContainer = props => {
  const [showDownload, setShowDownload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState({
    sources: [],
    tracks: []
  })
  const [dataMovie, setDataMovie] = useState({
    movie: {
      image: Assets.no_preview.image2
    },
    sources: [],
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
    console.log(
      '%cDont steal google drive id from my members',
      'color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold'
    );
    console.log(
      '%cvisit https://jwdriveplayer.netlify.app',
      'color:yellow;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold'
    );
    console.log(
      '%c ----- Feature -----',
      'font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;'
    );
    console.log(
      '%c 1. Bypass limit',
      'font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;'
    );
    console.log(
      '%c 2. Play while your video convert',
      'font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;'
    );
    console.log(
      '%c 3. Resume play based on last duration',
      'font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;'
    );
    console.log(
      '%c 4. Using CDN',
      'font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;'
    );
    const getMovie = async () => {
      let token = Constants.TOKEN;
      let siteVerified = Constants.SITE_VERIFIED;
      let server = Constants.JWPLAYER;
      let cdn = Constants.JWPLAYER;
      let token2 = null;

      Jwplayer.GET_CONFIG(siteVerified).then(async config => {
        if (config) {
          server = config.server;
          cdn = config.cdn;
        }
      });

      await Jwplayer.GET_TOKEN().then(tokenoauth => {
        token2 = tokenoauth.access_token;
      });

      Jwplayer.GET_MOVIE(props.match.params.id, server, token).then(movie => {
        let subtitles = [];
        let sources = [];
        let download = {};
        movie.subtitles.map(subtitle => {
          subtitles.push({
            kind: 'captions',
            file: `https://proxy-jwdrive.herokuapp.com/${subtitle.file}`,
            label: subtitle.label
          });
        });
        if (movie) {
          Jwplayer.GET_SOURCE(
            movie.driveId,
            movie.enc,
            server,
            cdn,
            token
          ).then(async source => {
            if (!isEmpty(source.sources)) {
              source.sources.map(source => {
                sources.push({
                  file: source.file,
                  label: source.label,
                  type: 'video/mp4'
                });
              });
            } else {
              if (!isEmpty(movie.backupDriveId)) {
                await Jwplayer.GET_SOURCE(
                  movie.backupDriveId[0],
                  movie.enc,
                  server,
                  cdn,
                  token
                ).then(backupSource => {
                  download.url = `${backupSource?.download?.url}&token=${token2}`;
                  download.url2 = backupSource?.download?.url2;
                  if (isEmpty(backupSource.sources)) {
                    sources.push({
                      file: download.url2,
                      label: 'Original',
                      type: 'video/mp4',
                      default: true
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
            }
            setIsLoading(false)
            setPlaylist({
              sources,
              tracks: subtitles
            })
            setDataMovie({
              ...dataMovie,
              movie,
              sources,
              subtitles,
              download
            });
          });
        }
      });
    };
    getMovie();
  }, []);

  const onClickDownload = () => {
    setShowDownload(true);
  };

  const onCloseDownload = () => {
    setShowDownload(false);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{dataMovie?.movie?.title ?? 'Play Movie'} - Jwdriveplayer</title>
      </Helmet>
     <WrapPlayer>
     {
        !isLoading ? <PlayerComponent
        dataMovie={dataMovie}
        showDownload={showDownload}
        onClickDownload={onClickDownload}
        onCloseDownload={onCloseDownload}
        playlist={playlist}
      /> : <Spin tip="Loading..." size="large" style={{marginTop: 24}} />
      }
     </WrapPlayer>
    </div>
  );
};

export default PlayerContainer;
