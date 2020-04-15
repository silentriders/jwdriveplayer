import React from 'react';
import { FormAddMovie } from '../../Containers';
import { Row, Col } from 'antd';
import {Helmet} from 'react-helmet';
import { FloatChat } from '../../Components';

const HomePageComponent = () => {
  return (
    <div>
      <FloatChat />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Jwdriveplayer - Free player from google drive proxy, NO ADS ON PLAYER</title>
      </Helmet>
      <Row>
        <Col span={24}>
        <h1>Add Movie</h1>
        <FormAddMovie />
        </Col>
        <Col span={24}>
        <h1>Add Series</h1>
        <FormAddMovie type='series' />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageComponent;
