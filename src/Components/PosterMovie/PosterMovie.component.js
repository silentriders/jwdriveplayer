import React from 'react';
import { WrapperPosterMovie } from './PosterMovie.style';
import moment from 'moment';
import { IconFline } from '..';
import Assets from '../../Assets';
import { Link } from 'react-router-dom';

const PosterMovieComponent = props => {
  const { id, type, title, runtime, release, vote_average, img, season } = props;
  const slug =
    title !== undefined &&
    title.replace(/\s/g, '-').toLowerCase() +
      '-' +
      moment(release).format('YYYY');
  return (
    <WrapperPosterMovie>
      <Link to={`/movie/${slug}/${id}`}>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${img}`}
            alt={`POSTER-${slug}`}
          />
        </div>
        <div className="info">
          <h5>
            {title}
            {type === 'series' && `: Season ${season}`}
          </h5>
          <div className="info-footer">
            <div className="year">{moment(release).format('YYYY')}</div>
            <div className="runtime-rating">
              <IconFline img={Assets.icon.duration} marginRight={16} size={12}>
                {runtime} min
              </IconFline>
              <IconFline img={Assets.icon.stars} size={12}>
                {vote_average}
              </IconFline>
            </div>
          </div>
        </div>
      </Link>
    </WrapperPosterMovie>
  );
};

export default PosterMovieComponent;
