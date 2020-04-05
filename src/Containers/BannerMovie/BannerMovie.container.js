import React from 'react';
import BannerMovieComponent from './BannerMovie.component';
import PropTypes from 'prop-types';
import { Btn, IconFline } from '../../Components';
import { WrapperButtonBanner } from './BannerMovie.style';
import { message } from 'antd';
import Assets from '../../Assets';
import moment from 'moment';

const BannerMovieContainer = props => {
  const { data } = props;

  const slug =
    data.title !== undefined &&
    data.title.replace(/\s/g, '-').toLowerCase() +
      '-' +
      moment(data.release_date).format('YYYY');

  const handleAddList = () => {
    message.success('Success add to my list');
  };
  return (
    <BannerMovieComponent data={data}>
      <WrapperButtonBanner>
        <Btn style={{ marginRight: '40px' }} href={`/movie/${slug}/${data.id}`}>
          <IconFline img={Assets.icon.play} size={14}>
            Watch
          </IconFline>
        </Btn>
        <Btn type="secondary" onClick={handleAddList}>
          <IconFline img={Assets.icon.plus} size={14}>
            Add to List
          </IconFline>
        </Btn>
      </WrapperButtonBanner>
    </BannerMovieComponent>
  );
};

export default BannerMovieContainer;

BannerMovieContainer.propTypes = {
  data: PropTypes.any.isRequired
};
