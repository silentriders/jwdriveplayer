import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import { isEmpty } from 'lodash';
import { WrapPlayer, ButtonDownload } from './Player.style';
import Assets from '../../Assets';
import { Spin, message, Modal } from 'antd';
import Cookies from '../../Utils/Cookies';

const PlayerComponent = props => {
  const { dataMovie, showDownload, onClickDownload, onCloseDownload, playlist } = props;
  let poster = Assets.no_preview.image2;

  // if (dataMovie?.movie?.image !== '') {
  //   poster = dataMovie?.movie?.image;
  // }

  // const playlist = {
    // image: poster,
    // sources: dataMovie?.sources,
    // sources: [
    //   {
    //     file: dataMovie.download.url2,
    //     label: 'Original',
    //     type: 'video/mp4',
    //     default: true
    //   }
    // ],
    // tracks: dataMovie?.subtitles
  // }

  const onReady = () => {
    const player = window.jwplayer('player');
    player.on('ready', () => {
      message.info("loading..")
    })
    const buttonId = 'download-video-button';
    const iconPath = Assets.icon.download;
    const tooltipText = `Download Video`;
    if(dataMovie.movie.showDownload){
      player.addButton(iconPath, tooltipText, onClickDownload, buttonId);
    }
    player.setVolume(80);
    player.once('play', function() {
      let cookieData = Cookies.get(`resume_${dataMovie.movie._id}`);
      if (!cookieData) {
        // eslint-disable-next-line no-console
        console.log('Play at beginning');
      }
      const [resumeAt, duration] = cookieData.split(':');

      if (resumeAt < duration) {
        player.seek(resumeAt);
        message.info('Continue movie with the duration you left.');
        return;
      }
    });

    player.on('time', function(e) {
      Cookies.set(
        `resume_${dataMovie.movie._id}`,
        `${Math.floor(e.position)}:${player.getDuration()}`,
        1
      );
    });
    player.pause();
  };

  const getSourceDownload = () =>
    dataMovie?.sources.map((item, key) => (
      item.label !== 'Original' && <ButtonDownload key={key}>
      <a
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
        href={item.file}
      >
        {item.label}
      </a>
    </ButtonDownload>
    ));

  const _modalDownload = () => (
    <Modal
      title={`Download ${dataMovie.movie.title}`}
      visible={showDownload}
      footer={null}
      onCancel={onCloseDownload}
    >
      {getSourceDownload()}
      <ButtonDownload>
      <a
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
        href={dataMovie.download.url}
      >
        {`Original`}
      </a>
    </ButtonDownload>
    </Modal>
  );

  return (
    <WrapPlayer>
      <div>
          <ReactJWPlayer
            onReady={() => onReady()}
            playerId="player"
            playerScript="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"
            playlist={playlist}
          />
          {_modalDownload()}
        </div>
    </WrapPlayer>
  );
};

export default PlayerComponent;
