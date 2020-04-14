import React, { useState } from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  ClosedCaptionButton,
  BigPlayButton,
  VolumeMenuButton
} from 'video-react';
import { WrapPlayer } from './Player.style';

const PlayerComponent = props => {
  const [player, setPlayer] = useState({});
  const { dataMovie } = props;

  const _subtitles = () =>
    dataMovie?.movie !== undefined &&
    dataMovie?.movie?.subtitles.map(subtitle => (
      <track kind="captions" src={subtitle.file} label={subtitle.label} />
    ));

  console.log(
    dataMovie?.movie !== undefined && dataMovie?.movie?.subtitles[0].file
  );

  return (
    <WrapPlayer>
      <Player
        ref={player => {
          setPlayer(player);
        }}
        autoPlay={false}
        playsInline
        poster={dataMovie?.movie?.image}
        src={dataMovie?.source !== undefined && dataMovie.source[0].file}
      >
        <source
          src={dataMovie?.source !== undefined && dataMovie.source[0].file}
        />
        {_subtitles()}
        <BigPlayButton position="center" />
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <ClosedCaptionButton order={7} />
          <VolumeMenuButton />
        </ControlBar>
      </Player>
    </WrapPlayer>
  );
};

export default PlayerComponent;
