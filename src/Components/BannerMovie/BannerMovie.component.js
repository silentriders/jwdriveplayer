import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Skeleton } from 'antd';
import { IconFline } from '..';
import Assets from '../../Assets';
import { isEmpty } from 'lodash';
import moment from 'moment';
import {
  WrapperBannerMovie,
  InfoFilm,
  ContentHeader,
  Backdrop
} from './BannerMovie.style';

const BannerMovieComponent = ({ data, children }) => {
  return (
    <WrapperBannerMovie>
      <Backdrop
        img={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="BACKDROP"
      />
      <ContentHeader>
        <InfoFilm
          img={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="Nonton film subtitle indonesia"
        >
          <Row>
            <Col sm={12}>
              <div className="info">
                {isEmpty(data) ? (
                  <div>
                    <Skeleton title={false} paragraph={{ rows: 1, width: '150px' }} active />
                    <br/>
                    <Skeleton title={false} paragraph={{ rows: 1, width: '75%', height: '100px' }} active />
                    <Skeleton title={false} paragraph={{ rows: 1, width: '150px' }} active />
                    <br/>
                    <Skeleton title={false} paragraph={{ rows: 4, width: '150px' }} active />
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex' }}>
                      <IconFline img={Assets.icon.duration} marginRight={24}>
                        {data.runtime} min
                      </IconFline>
                      <IconFline img={Assets.icon.stars}>
                        {data.vote_average}
                      </IconFline>
                    </div>
                    <h1>{data?.title}</h1>
                    <span>{moment(data.release_date).format('DD MMMM YYYY')}</span>
                    <p>{data?.overview?.replace(/^(.{290}[^\s]*).*/, '$1')}</p>
                    {children}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </InfoFilm>
      </ContentHeader>
    </WrapperBannerMovie>
  );
};

export default BannerMovieComponent;

BannerMovieComponent.propTypes = {
  data: PropTypes.any.isRequired
};
