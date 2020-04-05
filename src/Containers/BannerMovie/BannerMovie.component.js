import React from 'react';
import PropTypes from 'prop-types';
import { BannerMovie } from '../../Components';

const BannerMovieComponent = (props) => {
  const { data, children } = props;
  
  return (
    <div>
      <BannerMovie data={data}>{children}</BannerMovie>
    </div>
  );
};

export default BannerMovieComponent;

BannerMovieComponent.propTypes = {
  data: PropTypes.any.isRequired
};