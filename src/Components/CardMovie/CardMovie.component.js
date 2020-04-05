import React from 'react';
import { WrapperCardMovie } from './CardMovie.style';
import { Progress } from 'antd';

const CardMovieComponent = props => {
  const {
    type,
    posterImg,
    title,
    runtime,
    currentTime,
    season,
    episode
  } = props;

  const percentage = (currentTime/runtime)*100;

  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${("0" + rhours).slice(-2)}:${("0" + rminutes).slice(-2)}:00`
    }

  const _continue = () => (
    <div className="continue-movie">
      <div className="poster">
        <img src={posterImg} alt="POSTER-MOVIE" />
      </div>
      <div className="info">
        <h5>{title}</h5>
        {type === 'series' && <p>Season {season} Episode {episode}</p>}
        <div className="progress">
          <Progress percent={percentage} size="small" format={() => timeConvert(currentTime)} />
        </div>
      </div>
    </div>
  );

  return <WrapperCardMovie>{_continue()}</WrapperCardMovie>;
};

export default CardMovieComponent;
