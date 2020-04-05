import React, { useEffect, useState } from 'react';
import PlayMovieComponent from './PlayMovie.component';
import { GdriveService, TmdbService } from '../../Services';
import { message } from 'antd';

const PlayMovieContainer = props => {
  const [dataMovie, setDataMovie] = useState({});
  const [movieMedia, setMovieMedia] = useState({});
  const [isShowPlayer, setIsShowPlayer] = useState(false);
  const idMovie = props.match.params.id;

  const handleShowPlayer = () => {
    if(movieMedia === null){
      message.warn("Saat ini belum ada film nya, tunggu yaa")
    }else{
      setIsShowPlayer(true);
    }
  };

  useEffect(() => {
    const getPlayer = async () => {
      await TmdbService.GET_MOVIE(idMovie).then(async movie => {
        setDataMovie(movie);
        await GdriveService.GET_MEDIA(movie?.imdb_id).then(media => {
          setMovieMedia(media);
        });
      });
    };
    getPlayer();
  }, [idMovie]);

  return (
    <PlayMovieComponent
      dataMovie={dataMovie}
      movieMedia={movieMedia}
      isShowPlayer={isShowPlayer}
      handleShowPlayer={handleShowPlayer}
    />
  );
};

export default PlayMovieContainer;
