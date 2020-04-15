import React from 'react';
import { WrapFloatChat } from './FloatChat.style';
import { IconFline } from '..';
import Assets from '../../Assets';

const FloatChatComponent = () => {
  return (
    <a href="http://jwdriveplayer.chatango.com/" rel="noopener noreferrer" target="_blank">
      <WrapFloatChat>
        <IconFline img={Assets.icon.chat} size={24} />
      </WrapFloatChat>
    </a>
  );
};

export default FloatChatComponent;
