import React from 'react';
import { Row, Col } from 'antd';
import { SeeAll, PosterMovie } from '../../Components';
import { WrapperRecommended } from './Recommended.style';

const RecommendedComponent = () => {

  const mockDiscover = [{
    type: 'movie',
    title: 'Bad Boys for Life',
    runtime: 124,
    release: "2020-01-15",
    vote_average: 7,
    poster: "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg"
  },
  {
    type: 'series',
    title: 'Money Heist',
    runtime: 124,
    current_runtime: 60,
    poster: '/MoEKaPFHABtA1xKoOteirGaHl1.jpg',
    season: 4,
    vote_average: 7
  }]

  const _mappingDiscover = () => (
    mockDiscover.map((discover, key) => (
      <PosterMovie key={key}
        type={discover.type}
        title={discover.title}
        runtime={discover.runtime}
        release={discover.release}
        vote_average={discover.vote_average}
        img={discover.poster}
        season={discover.season}
      />
    ))
  )

  return (
    <WrapperRecommended>
      <Row>
        <Col sm={21}>
          <h3>Recommended for you</h3>
        </Col>
        <Col sm={3}>
          <SeeAll to="#" />
        </Col>
        <Col sm={24}>
          <p>Based on your current watch, we analyze what your favourite genre most you watch</p>
        </Col>
      </Row>
      <Row style={{display: 'flex', marginTop: '24px', flexWrap: 'wrap'}}>
        {_mappingDiscover()}
      </Row>
    </WrapperRecommended>
  );
};

export default RecommendedComponent;