import React, { useEffect, useState } from 'react';
import PlayerComponent from './Player.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';
import Assets from '../../Assets';

const PlayerContainer = (props) => {
  const [dataMovie, setDataMovie] = useState({
    movie: {
      image: Assets.no_preview.image2
    },
    sources: [{
      file: Assets.no_preview.video,
      label: 'Not found',
      type: 'video/mp4',
      default: true
    }],
    subtitles: []
  })

  useEffect(()=>{
    const getMovie = async () => {
      await Jwplayer.GET_MOVIE(props.match.params.id).then(async movie => {
        let subtitles = []
        let sources = []
        movie.subtitles.map(subtitle=> {
          subtitles.push({
            kind: 'captions',
            file: `https://cors-anywhere.herokuapp.com/${subtitle.file}`,
            label: subtitle.label
          })
        })
        await Jwplayer.GET_SOURCE(movie.driveId).then(async source=>{
          source.map(source=> {
            sources.push({
              file: source.file,
              label: source.label,
              type: 'video/mp4'
            })
          })
          setDataMovie({
            movie,
            sources,
            subtitles
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