/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PlayerComponent from './Player.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';
import Assets from '../../Assets';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';

const PlayerContainer = props => {
  const [showDownload, setShowDownload] = useState(false);
  const [dataMovie, setDataMovie] = useState({
    movie: {
      image: Assets.no_preview.image2
    },
    // sources: [
    //   {
    //     file: Assets.no_preview.video,
    //     label: 'Not found',
    //     type: 'video/mp4',
    //     default: true
    //   }
    // ],
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
      let token =
        '6384af13bfe11434e2409adb43dc0095033c3997bdd2ad5f1e3f06763f17baf331ec76ae3300c421da2886be89374cf8888d205444b24c3c20d2d7010964b10105d4cd401d3c5cca1f5c052c323b9652fb7e008693265fd2062403ee3e32f425a6bf9f484b8c1de8179dd438bd63d5422cf45fddbc3ebaede4801b79519c6208e33ed182fc1c097f3f22617b52530f3fcf1e7ff9d820469b747e00b74946028f055a25dc121e46c8341f47f1dfaa946497c0065021c503e4a3924c37cd16ca3979f8586e45658459f7e7f45263ece617';
      let siteVerified = '5e9cb46c376b2e25547fe23d';
      let server = 'https://jwdriveplayer.herokuapp.com';
      let cdn = 'https://jwdriveplayer.herokuapp.com';
      let token2 = null;

      await Jwplayer.GET_CONFIG(siteVerified).then(async config => {
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
            file: `https://cors-anywhere.herokuapp.com/${subtitle.file}`,
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
          ).then(source => {
            download.url = `${source?.download?.url}&token=${token2}`;
            console.log(download.url);
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
                Jwplayer.GET_SOURCE(
                  movie.backupDriveId[0],
                  movie.enc,
                  server,
                  cdn,
                  token
                ).then(backupSource => {
                  download.url = `${backupSource?.download?.url}&token=${token2}`;
                  if (isEmpty(backupSource.sources)) {
                    sources.push({
                      file: download.url,
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
              } else {
                sources.push({
                  file: download.url,
                  label: 'Original',
                  type: 'video/mp4',
                  default: true
                });
              }
            }
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
      <PlayerComponent
        dataMovie={dataMovie}
        showDownload={showDownload}
        onClickDownload={onClickDownload}
        onCloseDownload={onCloseDownload}
      />
    </div>
  );
};

export default PlayerContainer;
