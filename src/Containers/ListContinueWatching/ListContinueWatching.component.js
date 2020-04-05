import React from 'react';
import { WrapperListContinueWatching } from './ListContinueWatching.style';
import { Row, Col } from 'antd';
import { SeeAll, CardMovie } from '../../Components';

const ListContinueWatchingComponent = props => {
  const continueMovie = [
    {
      type: 'movie',
      title: 'Bad Boys for Life',
      runtime: 124,
      current_runtime: 110,
      poster: 'https://image.tmdb.org/t/p/w500/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg'
    },
    {
      type: 'series',
      title: 'Money Heist',
      runtime: 124,
      current_runtime: 60,
      poster: 'https://image.tmdb.org/t/p/w500//MoEKaPFHABtA1xKoOteirGaHl1.jpg',
      season: 4,
      episode: 1
    }
  ];

  const _mappingContinue = () =>
    continueMovie.map((movie, key) => (
      <CardMovie
        key={key}
        type={movie.type}
        posterImg={movie.poster}
        title={movie.title}
        runtime={movie.runtime}
        currentTime={movie.current_runtime}
        season={movie?.season}
        episode={movie?.episode}
      />
    ));

  return (
    <WrapperListContinueWatching>
      <Row>
        <Col sm={21}>
          <h3>Continue Watching</h3>
        </Col>
        <Col sm={3}>
          <SeeAll to="#" />
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <div className="list">{_mappingContinue()}</div>
      </Row>
    </WrapperListContinueWatching>
  );
};

export default ListContinueWatchingComponent;
