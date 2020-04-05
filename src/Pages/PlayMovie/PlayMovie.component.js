import React from 'react';
import {
  WrapperPlayMoviePage,
  BannerPlay,
  PlayButton
} from './PlayMovie.style';
import Iframe from 'react-iframe';

const PlayMovieComponent = props => {
  const { dataMovie, movieMedia, isShowPlayer, handleShowPlayer } = props;

  return (
    <WrapperPlayMoviePage>
      {!isShowPlayer ? (
        <BannerPlay
          img={`https://image.tmdb.org/t/p/original/${dataMovie?.backdrop_path}`}
        >
          <PlayButton onClick={handleShowPlayer} />
        </BannerPlay>
      ) : (
        <Iframe
          url={movieMedia.player_url}
          width="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      )}
    </WrapperPlayMoviePage>
  );
};

export default PlayMovieComponent;
