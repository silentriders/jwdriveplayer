/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PlayerComponent from './Player.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';

const PlayerContainer = (props) => {
  const [dataMovie, setDataMovie] = useState({})

  useEffect(()=>{
    const getMovie = async () => {
      await Jwplayer.GET_MOVIE(props.match.params.id).then(async movie => {
        await Jwplayer.GET_SOURCE(movie.driveId).then(async source=>{
          setDataMovie({
            movie,
            source
          })
        })
      })
    }
    getMovie()
  },[])
  
  return (
    <div>
      <PlayerComponent
        dataMovie={dataMovie}
      />
    </div>
  );
};

export default PlayerContainer;