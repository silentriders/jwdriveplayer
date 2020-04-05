import React from 'react';
import PropTypes from 'prop-types';
import { WrapperBtn } from './Btn.style';
import { Button } from 'antd';
import { IconFline } from '..';
import Constants from '../../Config/Constants';

const BtnComponent = (props) => {
  const { iconImg, size, type, onClick, children, disabled, htmlType, shape, loading, block, ghost, style, href } = props;

  const _type = (type) => {
    if(type === 'primary'){
      return Constants.COLOR.RED;
    }
    else if(type === 'secondary'){
      return Constants.COLOR.BLACK;
    }
    else if(type === 'yellow'){
      return Constants.COLOR.YELLOW;
    }
    else{
      return Constants.COLOR.BLUE;
    }
  }

  return (
    <WrapperBtn bgColor={_type(type)}>
      <Button
        size={size}
        type={type}
        onClick={onClick}
        disabled={disabled}
        htmlType={htmlType}
        shape={shape}
        loading={loading}
        block={block}
        ghost={ghost}
        style={style}
        href={href}
      >
        {
          iconImg && <IconFline img={iconImg} size={size} />
        }
        {children}
      </Button>
    </WrapperBtn>
  );
};

export default BtnComponent;

BtnComponent.propTypes = {
  img: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  htmlType: PropTypes.string,
  shape: PropTypes.string,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string
};

BtnComponent.defaultProps = {
  disabled: false,
  type: 'primary',
  block: false,
  ghost: false,
  htmlType: 'button',
  loading: false,
  shape: 'round'
};
