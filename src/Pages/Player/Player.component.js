import React from 'react';
// import {
//   Player,
//   ControlBar,
//   ReplayControl,
//   ForwardControl,
//   CurrentTimeDisplay,
//   TimeDivider,
//   ClosedCaptionButton,
//   BigPlayButton,
//   VolumeMenuButton
// } from 'video-react';
import ReactJWPlayer from 'react-jw-player';
import {isEmpty} from 'lodash'
import { WrapPlayer } from './Player.style';

const PlayerComponent = props => {
  // const [player, setPlayer] = useState({});
  const { dataMovie } = props;
  const poster = dataMovie?.movie?.image !== '' ? dataMovie?.movie?.image : `https://www.ecopetit.cat/wpic/mpic/101-1019747_passeio-das-aguas-cinema.jpg`

  // const _subtitles = () =>
  // !isEmpty(dataMovie?.movie?.subtitle) &&
  //   dataMovie?.movie?.subtitles.map(subtitle => (
  //     <track kind="captions" src={subtitle.file} label={subtitle.label} />
  //   ));

  // const videoReactPlayer = () => (
  //   <Player
  //       ref={player => {
  //         setPlayer(player);
  //       }}
  //       autoPlay={false}
  //       playsInline
  //       poster={dataMovie?.movie?.image !== '' ? dataMovie?.movie?.image : `https://www.ecopetit.cat/wpic/mpic/101-1019747_passeio-das-aguas-cinema.jpg`}
  //       src={dataMovie?.source !== undefined && dataMovie.source[0].file}
  //     >
  //       <source
  //         src={dataMovie?.source !== undefined && dataMovie.source[0].file}
  //       />
  //       {!isEmpty(dataMovie?.movie?.subtitle) && _subtitles()}
  //       <BigPlayButton position="center" />
  //       <ControlBar>
  //         <ReplayControl seconds={10} order={1.1} />
  //         <ForwardControl seconds={30} order={1.2} />
  //         <CurrentTimeDisplay order={4.1} />
  //         <TimeDivider order={4.2} />
  //         <ClosedCaptionButton order={7} />
  //         <VolumeMenuButton />
  //       </ControlBar>
  //     </Player>
  // )

  const sources = () => {
    let src = []
    !isEmpty(dataMovie.source) && dataMovie.source.map(source=> {
      src.push({
        file: source.file,
        label: source.label,
        type: 'video/mp4'
      })
      return;
    })
    return src;
  }

  const tracks = () => {
    let src = []
    !isEmpty(dataMovie.movie) && dataMovie.movie.subtitles.map(subtitle=> {
      src.push({
        kind: 'captions',
        file: `https://cors-anywhere.herokuapp.com/${subtitle.file}`,
        label: subtitle.label,
        default: true
      })
      return;
    })
    return src;
  }

  const playlist = [{
    title: !isEmpty(dataMovie.movie) && dataMovie.movie.title,
    image: poster,
    sources: sources(),
    tracks: tracks()
  }];

  return (
    <WrapPlayer>
     {!isEmpty(sources()) &&  <ReactJWPlayer
        playerId='play'
        playerScript='https://cdn.jwplayer.com/libraries/wF6JZNTr.js'
        playlist={playlist}
        displaytitle={true}
      />}
    </WrapPlayer>
  );
};

export default PlayerComponent;
