import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperSeeAll } from './SeeAll.style';
import Assets from '../../Assets';

const SeeAllComponent = ({to}) => {
  return (
    <WrapperSeeAll>
      <Link to={to}>See All
      <img src={Assets.icon.arrow_long_right} alt="see-all" />
      </Link>
    </WrapperSeeAll>
  );
};

export default SeeAllComponent;