import React from 'react';
import PropTypes from 'prop-types';
import { WrapperIconFline } from './IconFline.style';

const IconFlineComponent = props => {
  const { img, size, children, marginRight } = props;
  return (
    <WrapperIconFline size={size} marginRight={marginRight}>
      <div className="img-icon">
        <img src={img} alt="ICON" />
      </div>
      <div className="text">
        <p>{children}</p>
      </div>
    </WrapperIconFline>
  );
};

export default IconFlineComponent;

IconFlineComponent.propTypes = {
  img: PropTypes.string.isRequired,
  size: PropTypes.number,
  marginRight: PropTypes.number
};
