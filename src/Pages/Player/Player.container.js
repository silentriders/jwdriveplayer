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

  const reverseStr = str => {
    const splitString = str.split('')
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join('')
    return joinArray
  }

  const decDrive = str => {
    return reverseStr(
      new Buffer.from(
        new Buffer.from(str, 'base64').toString('ascii'),
        'base64'
      ).toString('ascii')
    )
  }

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
      let token = null;
      let siteVerified = '5e9cb0e2a3363425540bb828';
      let driveKey = null;
      let server = null
      let cdn = null
      let body = {
        email: 'admin@jwdriveplayer.com',
        password: 'ade12561256'
      };

      await Jwplayer.GET_CONFIG(siteVerified).then(async config => {
        await Jwplayer.POST_LOGIN(config.server, body).then(async loginRes => {
          if (loginRes) {
            token = loginRes.token;
            driveKey = config.driveKey
            server = config.server
            cdn = config.cdn
            console.log(token)
            await Jwplayer.GET_MOVIE(props.match.params.id, server, token).then(async movie => {
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
              await Jwplayer.GET_SOURCE(movie.driveId, movie.enc, server, cdn, token).then(
                async source => {
                  download = {
                    url: `https://www.googleapis.com/drive/v3/files/${decDrive(movie.driveId)}?alt=media&key=${driveKey}`
                  };
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
                      await Jwplayer.GET_SOURCE(movie.backupDriveId[0], movie.enc, server, cdn, token).then(
                        async backupSource => {
                          download = {
                            url: `https://www.googleapis.com/drive/v3/files/${decDrive(movie.backupDriveId[0])}?alt=media&key=${driveKey}`
                          };
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
                        }
                      );
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
                }
              );
            });

          }
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
