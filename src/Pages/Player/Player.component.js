import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import { isEmpty } from 'lodash';
import { WrapPlayer, ButtonDownload } from './Player.style';
import Assets from '../../Assets';
import { Spin, message, Modal } from 'antd';
import Cookies from '../../Utils/Cookies';

const PlayerComponent = props => {
  const { dataMovie, showDownload, onClickDownload,
    onCloseDownload } = props;
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
      //     file: dataMovie?.download?.url,
      //     label: 'Original',
      //     type: 'video/mp4',
      //     default: true
      //   }
      // ],
      tracks: dataMovie?.subtitles
    }
  ];


  const onReady = () => {
    const player = window.jwplayer('player');
    const buttonId = 'download-video-button';
    const iconPath = Assets.icon.download;
    const tooltipText = `Download Video ${dataMovie.movie.title}`;
    player.addButton(iconPath, tooltipText, onClickDownload, buttonId);
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


  const getSourceDownload = () => (
    dataMovie?.sources.map((item,key) => (
     <ButtonDownload key={key}>
        <a className="download-button" target="_blank" rel="noopener noreferrer" href={item.file}>{item.label}</a>
     </ButtonDownload>
    ))
  )

  const _modalDownload = () => (
    <Modal
      title={`Download ${dataMovie.movie.title}`}
      visible={showDownload}
      footer={null}
      onCancel={onCloseDownload}
    >
      {getSourceDownload()}
    </Modal>
  );

  return (
    <WrapPlayer>
      {isEmpty(dataMovie?.sources) ? (
        <Spin size="large" tip="Please wait ..." style={{ marginTop: '15%' }} />
      ) : (
        <div>
          <ReactJWPlayer
            onReady={() => onReady()}
            playerId="player"
            playerScript="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"
            playlist={playlist}
            displaytitle={true}
          />
          {_modalDownload()}
        </div>
      )}
    </WrapPlayer>
  );
};

export default PlayerComponent;
