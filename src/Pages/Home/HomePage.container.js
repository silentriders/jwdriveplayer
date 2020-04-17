/* eslint-disable no-console */
import React, { useEffect } from 'react';
import HomePageComponent from './HomePage.component';
import Jwplayer from '../../Services/Jwplayer/Jwplayer';
import { message } from 'antd';

const HomePageContainer = () => {
  useEffect(() => {
    const _ping = async () => {
      console.log(
        '%cStop!',
        'color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold'
      );
      console.log(
        '%cWhy you wanna see my systems ?',
        'color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold'
      );
      console.log(
        '%cLets code together dude... Dont hacking or hijacking, hacker ethic know attitude',
        'color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold'
      );
      message.loading('Checking server..', 0.3);
      await Jwplayer.GET_PING().then(async res => {
        if (res?.msg === 'pong') {
          message.success('Server ready !', 1);
        }
      });
    };
    _ping();
  }, []);

  return <HomePageComponent />;
};

export default HomePageContainer;
